
agGrid.LicenseManager.setLicenseKey("");
agGrid.initialiseAgGridWithAngular1(angular);

var app=angular.module("app",['ui.router','agGrid']);
app.controller("agGridCtl", function($scope, $timeout, $state) {
    this.firstName = "John";
    this.lastName = "Doe";
    this.gridOptions = {
        columnDefs: [
            {headerName:'Name',field:'name'},
            {headerName:'Sex',field:'sex'},
            {headerName:'Age',field:'age'},
        ],
        rowData: [
            {name:'ZhangSan',sex:'Male',age:'100'},
            {name:'LiSi',sex:'Female',age:'5'},
            {name:'WangWu',sex:'Male',age:'50'},
            {name:'XiaoFeng',sex:'Male',age:'50'},
            {name:'DaWei',sex:'Male',age:'80'},
            {name:'WangBingLuo',sex:'Male',age:'10'},
            {name:'DengLiwe',sex:'Male',age:'30'},
            {name:'XieMaoKuo1',sex:'Male',age:'90'},
            {name:'XieMaoKuo2',sex:'Male',age:'90'},
            {name:'XieMaoKuo3',sex:'Male',age:'90'},
            {name:'XieMaoKuo4',sex:'Male',age:'90'},
            {name:'XieMaoKuo5',sex:'Male',age:'90'},
            {name:'XieMaoKuo6',sex:'Male',age:'90'},
            {name:'XieMaoKuo7',sex:'Male',age:'90'},
            {name:'XieMaoKuo8',sex:'Male',age:'90'},
            {name:'XieMaoKuo9',sex:'Male',age:'90'},
        ],
        enableFilter: true,
        rowSelection: 'multiple',
        rowDeselection: true
    };
    this.go=function(){
           $state.go("test");
    };
})
.controller("leftCtl",function($scope, $event, $state){
    this.toTarget=function(){
        $state.go("rightDetail");
    }

});