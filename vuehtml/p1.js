var get=function(a){console.log('Helo'+a)};
var plugin={};

plugin.install=function(Vue){
  if(plugin.installed){
    return ;
  }
  Vue.who=get;
  Object.defineProperties(Vue.prototype,{
    $who:{
      get(){
        return {get:get}
      }
    }
  });
  Vue.mixin({
    created:function(){
      console.log('Plugin activiated');
    }
  })
}

if(typeof window !== 'undefined' && window.Vue){
  window.Vue.use(plugin);
}
