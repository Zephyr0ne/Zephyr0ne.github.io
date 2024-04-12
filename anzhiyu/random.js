var posts=["2019/06/24/Docker镜像服务/","2020/01/20/IDEA卡顿解决方法/","2022/05/17/SSL 部署/","2023/11/06/MayDay/","2022/11/23/Linux的文件同步/","2022/11/06/hexo部署服务器/","2019/05/20/hello-world/","2023/08/04/刻舟求剑/","2024/03/15/使用Ruoyi-vue快速搭建一套系统/","2019/06/18/如何部署自己的第一台服务器/","2024/04/01/贴身管家/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };