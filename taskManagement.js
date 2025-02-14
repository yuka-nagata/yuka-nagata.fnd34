'use strict'
// 1行目に記載している 'use strict' は削除しないでください

function createTask() {
  const managementBox = document.getElementById("taskManagement");
  const taskName = document.getElementById("task").value;

  createBox(managementBox, taskName);
}

function createBox(managementBox, taskName) {
  const taskBox = document.createElement("div");
  taskBox.className = "taskBox";

  //右上に削除ボタンをつくる
  createDeleteBox(taskBox);
  
  //タスク名の箱をつくる
  const taskNameBox = document.createElement("div");
  taskNameBox.innerText =taskName;
  taskBox.appendChild(taskNameBox);

  managementBox.appendChild(taskBox);
}

function createDeleteBox(taskBox) {
  const box = document.createElement("div");
  box.className = "deleteBox";
  box.innerText = "×";
  taskBox.appendChild(box);

  //削除ボタンで、タスクボックスをけす機能を追加
  box.addEventListener("click", deleteTaskBox);
}

function deleteTaskBox() {
  console.log("delete");
  this.parentElement.remove();
}

//作成ボタンで、タスクボックスをつくる
 document.getElementById("button").addEventListener("click", createTask);

