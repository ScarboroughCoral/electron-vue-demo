export default [
  {
    color:'#95e1d3',
    title:'内芯管理',
    route:'/core-manage',
    name:'Core Manage',
    page:()=>import('@/views/CoreManagePage/index.vue'),
    icon:'el-icon-coin'
  },
  {
    color:'#eaffd0',
    title:'真机模拟',
    route:'/machine-simulate',
    name:'Machine Simulate',
    page:()=>import('@/views/MachineSimulatePage/index.vue'),
    icon:'el-icon-turn-off'
  },
  {
    color:'#fce38a',
    title:'属性计算',
    route:'/property-compute',
    name:'Property Compute',
    page:()=>import('@/views/PropertyComputePage/index.vue'),
    icon:'el-icon-s-grid'
  },
  {
    color:'#f38181',
    title:'外壳管理',
    route:'/shell-manage',
    name:'Shell-Manage',
    page:()=>import('@/views/ShellManagePage/index.vue'),
    icon:'el-icon-delete-solid'
  }
]