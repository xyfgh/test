/**  
 * 用于在不打断程序正常执行的情况下显示提示数据  
 * @param config  
 * @return  
*/  
var Toast = function(config){   
    this.context = config.context==null?$('body'):config.context;//上下文   
    this.message = config.message;//显示内容   
    this.time = config.time==null?4000:config.time;//持续时间   
    this.left = config.left;//距容器左边的距离   
    this.top = config.top;//距容器上方的距离   
    this.init();   
}   
var msgEntity;   
Toast.prototype = {   
    //初始化显示的位置内容等   
    init : function(){   
        $("#toastMessage").remove();   
        //设置消息体   
        var msgDIV = new Array();   
        msgDIV.push('<div id="toastMessage" class="layermbox layermbox0 layermshow"><div class="layermmain"><div class="section"><div class="layermchild  layermanim" style="text-align:center;border:none;background-color:rgba(0,0,0,0.6);color:#fff;">');   
        msgDIV.push('<div class="layermcont">'+this.message+'</div>');   
        msgDIV.push('</div></div></div></div>');   
        msgEntity = $(msgDIV.join('')).appendTo(this.context);   
        //设置消息样式   
       // var left = this.left == null ? this.context.width()/2-msgEntity.find('span').width()/2 : this.left;   
        //var top = this.top == null ? '50px' : this.top;   
       // msgEntity.css({position:'absolute',top:top,'z-index':'99',left:left,'background-color':'black',color:'white','font-size':'18px',padding:'10px',margin:'10px'});   
        //msgEntity.addClass("layermbox","layermbox0","layermshow");
        msgEntity.hide();   
    },   
    //显示动画   
    show :function(){   
        msgEntity.fadeIn(this.time/5);   
        msgEntity.fadeOut(this.time/2);   
    }          
}  