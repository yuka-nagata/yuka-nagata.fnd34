'use strict'
// 1行目に記載している 'use strict' は削除しないでください
const taskKey = "taskList"
let taskList = window.localStorage.getItem(taskKey);
let taskArray = [];

// ローカルストレージに保存されたタスクリストの文字列を、配列に戻す
if (taskList !== undefined || taskList !== null) {
  taskArray = JSON.parse(taskList);
} else {
  taskList = "";
}

const managementBox = document.getElementById("taskManagement");

// ローカルストレージに保存されたタスクの箱を表示させる
if (taskArray.length > 0) {
  for (const task of taskArray) {
    createBox(managementBox, task);
  }
}

/**
 * 入力された文字を表記したタスクの箱を作成し、ローカルストレージに保存する
 */
function createTask() {
  const taskName = document.getElementById("task").value;

  createBox(managementBox, taskName);
  
  // ローカルストレージの更新
  taskArray.push(taskName);
  taskList = JSON.stringify(taskArray);
  window.localStorage.setItem(taskKey, taskList);

  document.getElementById("task").value ="";
}

/**
 * 指定された箱の中に指定されたタスク名の箱を作成し表示させる
 * @param {object} managementBox 
 * @param {string} taskName 
 */
function createBox(managementBox, taskName) {
  const taskBox = document.createElement("div");
  taskBox.className = "taskBox";

  //右上に削除ボタンをつくる
  createDeleteBox(taskBox);
  
  //タスク名の箱をつくる
  const taskNameBox = document.createElement("div");
  taskNameBox.className = "taskNameBox";
  taskNameBox.innerText =taskName;
  taskBox.appendChild(taskNameBox);

  managementBox.appendChild(taskBox);
}

/**
 * 指定されたタスクの箱の右上に削除マークを作成し、押されたらタスクの箱を削除する機能をもたせる
 * @param {object} taskBox 
 */
function createDeleteBox(taskBox) {
  const box = document.createElement("div");
  box.className = "deleteBox";
  box.innerText = "×";
  taskBox.appendChild(box);

  //削除ボタンで、タスクボックスをけす機能を追加
  box.addEventListener("click", deleteTaskBox);
}

/**
 * 指定されたタスクの箱を削除し、ローカルストレージからも削除する
 */
function deleteTaskBox() {
  console.log("delete");
  this.parentElement.remove();
  
  // ローカルストレージの更新
  const deleteTaskName = this.parentElement.getElementsByClassName("taskNameBox")[0].innerText;
  taskArray.splice(taskArray.indexOf(deleteTaskName), 1);
  taskList = JSON.stringify(taskArray);
  window.localStorage.setItem(taskKey, taskList);
}

//作成ボタンで、タスクボックスをつくる
 document.getElementById("button").addEventListener("click", createTask);
