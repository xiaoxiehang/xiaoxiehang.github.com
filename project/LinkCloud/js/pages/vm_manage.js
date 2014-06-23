$('.f-dropdown').select({hd:'.f-dropdown-hd',bd:'.f-dropdown-bd',setText:false,currentHd:true});
$('.f-tableselect').select({hd:'.f-tableselect-hd',bd:'.f-tableselect-bd',type:'check',setText:false,currentHd:true})

//修改配置
$('.j-modify-deploy').click(function(){
    var h=[
        '<div class="win-box">',
            '<p>所属VM：oPA7c98k1t4NQhMIlDWd0ihNa9syDm</p>',
            '<p>IP（外网/内网）：118.123.25.30  /  10.91.0.25</p>',
            '<div class="win-box-tit">新配置</div>',
            '<div class="win-form">',
                '<ul>',
                    '<li><label><span>CPU：</span><input class="txt" type="text" size="40" value=""></label></li>',
                    '<li><label><span>内存：</span><input class="txt" type="text" size="40" value=""></label></li>',
                    '<li><label><span>磁盘大小：</span>50GB(添加、卸载磁盘请在磁盘模块操作)</label></li>',
                '</ul>',
            '</div>',
        '</div>'
    ];
    $.showWin({obj:'win-modify-deploy',title:'修改配置',drag:1,content:h.join(''),button:[{title:'确认修改',callback:function(){
        alert('回调函数');
    }},{title:'取消'}]});
})

//挂载镜像
$('.j-mount-mirror').click(function(){
    var h=[
        '<div class="win-box">',
            '<p>所属VM：oPA7c98k1t4NQhMIlDWd0ihNa9syDm</p>',
            '<p>IP（外网/内网）：118.123.25.30  /  10.91.0.25</p>',
            '<div class="win-box-tit">新配置</div>',
            '<div class="win-form">',
                '<ul>',
                    '<li><label><span>ISO镜像：</span><dl class="f-select"><dt class="f-select-hd"><a href="javascript:;">总公司</a><i class="f-select-arrow icon-arrow-d1"></i></dt><dd class="f-select-bd"><ul><li>1</li><li>2</li><li>3</li><li>4</li></ul></dd></dl></label></li>',
                '</ul>',
            '</div>',
        '</div>'
    ];
    $.showWin({obj:'win-mount-mirror',title:'挂载镜像',drag:1,content:h.join(''),button:[{title:'确认挂载',callback:function(){
        alert('回调函数');
    }},{title:'取消'}]});
    $('.f-select').select();
})

//重装系统
$('.j-reload-system').click(function(){
    var h=[
        '<div class="win-box">',
            '<p>所属VM：oPA7c98k1t4NQhMIlDWd0ihNa9syDm</p>',
            '<p>IP（外网/内网）：118.123.25.30  /  10.91.0.25</p>',
            '<div class="win-box-tit">新配置</div>',
            '<div class="win-form">',
                '<ul>',
                    '<li><label><span>系统镜像：</span><dl class="f-select"><dt class="f-select-hd"><a href="javascript:;">windows</a><i class="f-select-arrow icon-arrow-d1"></i></dt><dd class="f-select-bd"><ul><li>1</li><li>2</li><li>3</li><li>4</li></ul></dd></dl></label></li>',
                '</ul>',
            '</div>',
        '</div>'
    ];
    $.showWin({obj:'win-reload-system',title:'重装系统',drag:1,content:h.join(''),button:[{title:'确认挂载',callback:function(){
        alert('回调函数');
    }},{title:'取消'}]});
    $('.f-select').select();
})

//添加磁盘
$('.j-add-disk').click(function(){
    var h=[
        '<div class="win-box">',
            '<p>所属VM：oPA7c98k1t4NQhMIlDWd0ihNa9syDm</p>',
            '<p>IP（外网/内网）：118.123.25.30  /  10.91.0.25</p>',
            '<div class="win-box-tit">新增磁盘</div>',
            '<div class="win-form">',
                '<ul>',
                    '<li><label><span>磁盘大小：</span><input class="txt" type="text" value="">GB</label></li>',
                '</ul>',
            '</div>',
        '</div>'
    ];
    $.showWin({obj:'win-add-disk',title:'添加磁盘',drag:1,content:h.join(''),button:[{title:'确认添加',callback:function(){
        alert('回调函数');
    }},{title:'取消'}]});
})


//IO限速
$('.j-io-limit').click(function(){
    var h=[
        '<div class="win-box">',
            '<p>所属VM：oPA7c98k1t4NQhMIlDWd0ihNa9syDm</p>',
            '<p>IP（外网/内网）：118.123.25.30  /  10.91.0.25</p>',
            '<div class="win-box-tit">IO限速</div>',
            '<div class="win-form">',
                '<ul>',
                    '<li><label><span>磁盘：</span>VDA</label></li>',
                    '<li><label><span>限速类型：</span><dl class="f-select"><dt class="f-select-hd"><a href="javascript:;">bytes</a><i class="f-select-arrow icon-arrow-d1"></i></dt><dd class="f-select-bd"><ul><li>1</li><li>2</li><li>3</li><li>4</li></ul></dd></dl></label></li>',
                    '<li><label><span>Read：</span><input class="txt" type="text" value=""></label></li>',
                    '<li><label><span>Write：</span><input class="txt" type="text" value=""></label></li>',
                '</ul>',
            '</div>',
        '</div>'
    ];
    $.showWin({obj:'win-io-limit',title:'IO限速',drag:1,content:h.join(''),button:[{title:'确认限制',callback:function(){
        alert('回调函数');
    }},{title:'取消'}]});
    $('.f-select').select();
})

//自定义镜像
$('.j-custom-mirror').click(function(){
    var h=[
        '<div class="win-box">',
            '<p>所属VM：oPA7c98k1t4NQhMIlDWd0ihNa9syDm</p>',
            '<p>原镜像类型：Windows 2008 64 标准版</p>',
            '<div class="win-box-tit">制作镜像</div>',
            '<div class="win-form">',
                '<ul>',
                    '<li><label><span>镜像名称：</span><input class="txt" type="text" value="">GB</label></li>',
                    '<li><label><span>状态：</span><dl class="f-select"><dt class="f-select-hd"><a href="javascript:;">bytes</a><i class="f-select-arrow icon-arrow-d1"></i></dt><dd class="f-select-bd"><ul><li>1</li><li>2</li><li>3</li><li>4</li></ul></dd></dl></label></li>',
                    '<li><label><span>备注：</span><textarea class="txt"></textarea></label></li>',
                '</ul>',
            '</div>',
        '</div>'
    ];
    $.showWin({obj:'win-custom-mirror',title:'自定义镜像',drag:1,content:h.join(''),button:[{title:'确认',callback:function(){
        alert('回调函数');
    }},{title:'取消'}]});
    $('.f-select').select();
})


//创建快照
$('.j-create-snapshot').click(function(){
    var h=[
        '<div class="win-box">',
            '<p>所属VM：oPA7c98k1t4NQhMIlDWd0ihNa9syDm</p>',
            '<p>IP（外网/内网）：118.123.25.30  /  10.91.0.25</p>',
            '<div class="win-box-tit">创建快照</div>',
            '<div class="win-form">',
                '<ul>',
                    '<li><label><span>快照类型：</span><dl class="f-select"><dt class="f-select-hd"><a href="javascript:;">磁盘快照</a><i class="f-select-arrow icon-arrow-d1"></i></dt><dd class="f-select-bd"><ul><li>1</li><li>2</li><li>3</li><li>4</li></ul></dd></dl></label></li>',
                    '<li><label><span>选择母盘：</span><dl class="f-select"><dt class="f-select-hd"><a href="javascript:;">vda</a><i class="f-select-arrow icon-arrow-d1"></i></dt><dd class="f-select-bd"><ul><li>1</li><li>2</li><li>3</li><li>4</li></ul></dd></dl></label></li>',
                    '<li><label><span>快照名称：</span><textarea class="txt"></textarea></label></li>',
                '</ul>',
            '</div>',
        '</div>'
    ];
    $.showWin({obj:'win-create-snapshot',title:'创建快照',drag:1,content:h.join(''),button:[{title:'确认添加',callback:function(){
        alert('回调函数');
    }},{title:'取消'}]});
    $('.f-select').select();
})




//添加IP
$('.j-add-ip').click(function(){
    var h=[
        '<div class="win-box">',
            '<p>所属VM：oPA7c98k1t4NQhMIlDWd0ihNa9syDm</p>',
            '<p>Mac地址：00:16:3e:70:c6:f0</p>',
            '<div class="win-box-tit">为网卡添加IP</div>',
            '<div class="win-form">',
                '<ul>',
                    '<li><label><span>已有IP：</span>118.123.25.30  /  10.91.0.25</label></li>',
                    '<li><label><span>新增IP：</span><input class="txt" type="text" value=""><a class="u-operate-btn" href="javascript:;">筛选</a></label></li>',
                '</ul>',
            '</div>',
        '</div>'
    ];
    $.showWin({obj:'win-add-ip',title:'添加IP',drag:1,content:h.join(''),button:[{title:'确认添加',callback:function(){
        alert('回调函数');
    }},{title:'取消'}]});
})


//修改IP
$('.j-modify-ip').click(function(){
    var h=[
        '<div class="win-box">',
            '<p>所属VM：oPA7c98k1t4NQhMIlDWd0ihNa9syDm</p>',
            '<p>Mac地址：00:16:3e:70:c6:f0</p>',
            '<div class="win-box-tit">为网卡修改IP</div>',
            '<div class="win-form">',
                '<ul>',
                    '<li><label><span>已有IP：</span>118.123.25.30  /  10.91.0.25</label></li>',
                    '<li><label><span>新增IP：</span><input class="txt" type="text" value=""><a class="u-operate-btn" href="javascript:;">筛选</a></label></li>',
                '</ul>',
            '</div>',
        '</div>'
    ];
    $.showWin({obj:'win-modify-ip',title:'修改IP',drag:1,content:h.join(''),button:[{title:'确认修改',callback:function(){
        alert('回调函数');
    }},{title:'取消'}]});
})


//网卡限速
$('.j-nic-limit').click(function(){
    var h=[
        '<div class="win-box">',
            '<p>所属VM：oPA7c98k1t4NQhMIlDWd0ihNa9syDm</p>',
            '<p>Mac地址：00:16:3e:70:c6:f0</p>',
            '<div class="win-box-tit">网卡限速</div>',
            '<div class="win-form">',
                '<ul>',
                    '<li><label>原出网速度: 100Mbps 设置出网速度：<input class="txt" type="text" value="">Mbps</li>',
                    '<li><label>原出网速度: 100Mbps 设置出网速度：<input class="txt" type="text" value="">Mbps</li>',
                '</ul>',
            '</div>',
        '</div>'
    ];
    $.showWin({obj:'win-nic-limit',title:'网卡限速',drag:1,content:h.join(''),button:[{title:'确认限速',callback:function(){
        alert('回调函数');
    }},{title:'取消'}]});
})


//添加网卡
$('.j-add-nic').click(function(){
    var h=[
        '<div class="win-box">',
            '<p>所属VM：oPA7c98k1t4NQhMIlDWd0ihNa9syDm</p>',
            '<p>IP（外网/内网）：118.123.25.30  /  10.91.0.25</p>',
            '<div class="win-box-tit">新配置</div>',
            '<div class="win-form">',
                '<ul>',
                    '<li><label><span>CPU：</span><input class="txt" type="text" value="">核</label></li>',
                    '<li><label><span>内存：</span><input class="txt" type="text" value="">G</label></li>',
                    '<li><label><span>磁盘大小：</span>50GB(添加、卸载磁盘请在磁盘模块操作)</label></li>',
                '</ul>',
            '</div>',
        '</div>'
    ];
    $.showWin({obj:'win-add-nic',title:'添加网卡',drag:1,content:h.join(''),button:[{title:'确认添加',callback:function(){
        alert('回调函数');
    }},{title:'取消'}]});
})

//绑定Vlan
$('.j-bind-vlan').click(function(){
    var h=[
        '<div class="win-box">',
            '<p>所属VM：oPA7c98k1t4NQhMIlDWd0ihNa9syDm</p>',
            '<p>Mac地址：00:16:3e:70:c6:f0</p>',
            '<div class="win-box-tit">绑定Vlan</div>',
            '<div class="win-form">',
                '<ul>',
                    '<li><label><span>Vlan编号：</span><input class="txt" type="text" value=""><a class="u-operate-btn" href="javascript:;">筛选</a></label></li>',
                '</ul>',
            '</div>',
        '</div>'
    ];
    $.showWin({obj:'win-bind-vlan',title:'绑定Vlan',drag:1,content:h.join(''),button:[{title:'确认绑定',callback:function(){
        alert('回调函数');
    }},{title:'取消'}]});
})