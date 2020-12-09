var aData = Array();

function add() {
    var name = document.getElementById('Name').value;
    aData.push({name,'status':false});
    document.getElementById("Name").value = "";
    LoadListData();
}

function Xoa(key) {
    for (var i = 0; i < aData.length; i++) {
        if (key === i) {
            if (key == 0) {
                aData.shift();
            } else {
                aData.splice(i, key);
            }
            LoadListData();
            break;
        }
    }
}

function update(key) {
    for (var i = 0; i < aData.length; i++) {
        if (key === i) {
            document.getElementById("Name").value = aData[i].name;
            document.getElementById("index").value = i;
            break;
        }
    }
}

function LuuCapNhat() {
    for (var i = 0; i < aData.length; i++) {
        if (document.getElementById("index").value == i) {
            aData[i].name = document.getElementById("Name").value;
            document.getElementById("Name").value = "";
            document.getElementById("index").value = "";
            LoadListData();
            break;
        }
    }
}

function status(key) {
    for (var i = 0; i < aData.length; i++) {
        if (key === i) {
            if (aData[i].status===true){
                aData[i].status=false;
            }else {
                aData[i].status=true;
            }
        }
        LoadListData();
    }
}

function LoadListData() {

    var tbodyNode = document.getElementById('listData');
    tbodyNode.innerHTML = "";

    for (var i = 0; i < aData.length; i++) {
        var trNode = document.createElement('tr');
        var tdOptionNode = document.createElement('td');
        var btnOptionNode = document.createElement('input');
        btnOptionNode.type = "checkbox";
        btnOptionNode.name = "option";
        btnOptionNode.id = "option";
        btnOptionNode.checked = aData[i].status;
        btnOptionNode.setAttribute('onclick', "status(" +i+ ")");
        tdOptionNode.appendChild(btnOptionNode)

        var tdTenNode = document.createElement('td');
        var tenNode = document.createTextNode(aData[i].name);
        tdTenNode.appendChild(tenNode);
        var tdHanhDongNode = document.createElement('td');
        var btnXoaNode = document.createElement('button');
        btnXoaNode.type = "button";
        btnXoaNode.innerText = "Xóa";
        btnXoaNode.setAttribute('onclick', "Xoa(" + i + ")");


        var btnCapNhatNode = document.createElement('button');
        btnCapNhatNode.type = "button";
        btnCapNhatNode.innerText = "Cập nhật";
        btnCapNhatNode.setAttribute('onclick', "update(" + i + ")");

        tdHanhDongNode.appendChild(btnXoaNode);
        tdHanhDongNode.appendChild(btnCapNhatNode);

        trNode.appendChild(tdOptionNode);
        trNode.appendChild(tdTenNode);
        trNode.appendChild(tdHanhDongNode);

        tbodyNode.appendChild(trNode);
    }


}