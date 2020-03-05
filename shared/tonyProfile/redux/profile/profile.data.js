import tony_profile from '@iso/assets/images/projects/tony_profile.png';
// import profilebg from '@iso/assets/images/profile-bg.jpg';
import profilebg from '@iso/assets/images/projects/tony_profile_bg.png';
// posts
import pos_image from '@iso/assets/images/projects/pos_image.png';
import kuas_hospital from '@iso/assets/images/projects/kuas_hospital.png';
import kuasche_apparatus from '@iso/assets/images/projects/kuasche_apparatus.png';
import crm_manager from '@iso/assets/images/projects/crm_manager.png';
import crm_manager_system from '@iso/assets/images/projects/crm_manager_system.png';
import comment_manager_login from '@iso/assets/images/projects/comment_manager_login.png';
import comment_manager_system from '@iso/assets/images/projects/comment_manager_system.png';
import ln_app from '@iso/assets/images/projects/ln_app.png';
import ln_app_content from '@iso/assets/images/projects/ln_app_content.png';
import ln_app_desc from '@iso/assets/images/projects/ln_app_desc.png';
import ln_app_logo from '@iso/assets/images/projects/ln_app_logo.png';
import ln_audienx_system from '@iso/assets/images/projects/ln_audienx_system.png';
import ln_audienx_login from '@iso/assets/images/projects/ln_audienx_login.png';

const profileData = {
  id: 1,
  name: 'tony',
  username: '@tony',
  avatar: tony_profile,
  profile_bg: profilebg,
  post: [
    {
      id: 1,
      type: 'image',
      thumb_url: kuas_hospital,
      title: '學習門診中心',
      desc: `透過模仿醫療門診制度建立課後輔導機制，
      教授或導師能根據自己的需求開班授課，
      包含心理諮商、期中輔導、生活輔導等方面，
      於開班授課後，授課者能自行匯入須上課的學生名單或者由學生自行預約上課，
      於課後，教授能針對學生的個別情況做學習紀錄等評量，
      達到學習追蹤的成效`,
      teamRole: 'developer',
      skill: [{'name': 'PHP', 'color': '#2393c5'}, 
      {'name': 'Mysql', 'color': '#e68e00'}, 
      {'name': 'Ezsql', 'color': '#32ca55'}, 
      {'name': 'Smarty', 'color': '#e1b329'}, 
      {'name':'MVC', 'color': '#f64252'},
      {'name':'JQuery', 'color': '#0368ac'}],
      company: '振碩資訊',
      minHeight: 130,
    },
    {
      id: 2,
      type: 'image',
      thumb_url: kuasche_apparatus,
      title: '高應大化材系器材租借系統',
      desc: `將系上的器材資源整合，
      以利於系上各實驗室的研究人員能知道器材的租借情況，
      於網上登記租借後，
      系統自動連結學生資料，
      可透過學生證或教職員證刷卡登入，
      擺脫以往紙本登記後仍要取得鑰匙才能進去實驗室的不便`,
      teamRole: 'developer',
      skill: [{'name': 'PHP', 'color': '#2393c5'}, 
      {'name': 'Mysql', 'color': '#e68e00'}, 
      {'name': 'Ezsql', 'color': '#32ca55'}, 
      {'name': 'Smarty', 'color': '#e1b329'}, 
      {'name':'MVC', 'color': '#f64252'},
      {'name':'JQuery', 'color': '#0368ac'}],
      company: '振碩資訊',
      minHeight: 130,
    },
    {
      id: 3,
      type: 'image',
      thumb_url: pos_image,
      title: '高雄蓮池潭物產館 POS 系統',
      desc: `此系統為維護成本計算之公式，
      部分 BUG 修改`,
      teamRole: 'maintainer',
      skill: [{'name': 'PHP', 'color': '#2393c5'}, 
      {'name': 'Mysql', 'color': '#e68e00'}, 
      {'name': 'Ezsql', 'color': '#32ca55'}, 
      {'name': 'Smarty', 'color': '#e1b329'}, 
      {'name':'MVC', 'color': '#f64252'},
      {'name':'JQuery', 'color': '#0368ac'}],
      company: '振碩資訊',
      minHeight: 130,
    },
    {
      id: 4,
      type: 'gallery',
      thumb_url: comment_manager_login,
      title: '粉絲專頁留言管理系統',
      desc: `透過平台整合 FB、IG 粉絲專頁的留言，
      將不符合法規或較為負面的留言刪除，
      亦或針對需要客服的留言進行回覆`,
      teamRole: 'developer',
      skill: [{'name': 'PHP', 'color': '#2393c5'}, 
      {'name': 'Mysql', 'color': '#e68e00'}, 
      {'name': 'Ezsql', 'color': '#32ca55'}, 
      {'name': 'Smarty', 'color': '#e1b329'}, 
      {'name':'MVC', 'color': '#f64252'},
      {'name':'JQuery', 'color': '#0368ac'}],
      company: '麟數據',
      gallery: [comment_manager_login, comment_manager_system],
      minHeight: 130,
    },
    {
      id: 5,
      type: 'gallery',
      thumb_url: crm_manager,
      title: '網紅合作管理系統',
      desc: `平台整合客戶的 CRM 系統，
      並發派任務給網紅進行發文等任務，
      透過系統爬蟲自動抓取文章回來計算分數，
      評判該網紅的銷售成效`,
      teamRole: 'developer',
      skill: [{'name': 'PHP', 'color': '#2393c5'}, 
      {'name': 'Mysql', 'color': '#e68e00'}, 
      {'name': 'Ezsql', 'color': '#32ca55'}, 
      {'name': 'Smarty', 'color': '#e1b329'}, 
      {'name':'MVC', 'color': '#f64252'},
      {'name':'JQuery', 'color': '#0368ac'},
      {'name':'ECharts', 'color': '#293c55'}],
      company: '麟數據',
      gallery: [crm_manager, crm_manager_system],
      minHeight: 130,
    },
    {
      id: 6,
      type: 'gallery',
      thumb_url: ln_app_content,
      title: 'Ln { APP }',
      desc: `數據監測管理平台`,
      teamRole: 'maintainer',
      skill: [{'name': 'React', 'color': '#2393c5'}, 
        {'name': 'Redux', 'color': '#7141ba'}, 
        {'name': 'LESS', 'color': '#234374'}, 
        {'name': 'API', 'color': '#1e7907'}, 
        {'name':'ant design', 'color': '#f64252'},
        {'name':'ECharts', 'color': '#293c55'}],
      company: '麟數據',
      gallery: [ln_app, ln_app_desc],
      minHeight: 130,
    },
    {
      id: 7,
      type: 'gallery',
      thumb_url: ln_audienx_login,
      title: 'Ln { Audienx } 數據管理系統',
      desc: `公司數據整合平台`,
      teamRole: 'developer',
      skill: [{'name': 'React', 'color': '#2393c5'}, 
        {'name': 'Redux', 'color': '#7141ba'}, 
        {'name': 'LESS', 'color': '#234374'}, 
        {'name': 'API', 'color': '#1e7907'}, 
        {'name':'ant design', 'color': '#f64252'},
        {'name':'ECharts', 'color': '#293c55'}],
      company: '麟數據',
      gallery: [ln_audienx_login, ln_audienx_system],
      minHeight: 130,
    },
  ],
  companies: [
    {
      id: 1,
      time: '2013/08~2014/08',
      desc: `<p><b>振碩資訊</b></p>
      <p>職位: 軟體工程師</p>
      <p>程式語言: PHP + Ezsql + Smarty +Dojo/Jquery </p>
      <p>系統架構: MVC 及模組化開發</p>
      <p>開發:  
        <ul style="padding-left: 28px;">
          <li>1.  高應大化材系器材租借系統</li>
          <li>2.  高應大學習門診系統</li>
        </ul>
      </p>
      <p>維護:  高雄蓮池潭物產館POS系統</p>`,
    },
    {
      id: 2,
      time: '2018/10~2020/02',
      desc: `<p><b>鄰數據</b></p>
      <p>於此公司負責前端及後端</p>
      <p>程式語言: <ul style="padding-left: 28px;">
        <li>PHP + Ezsql + Smarty +Dojo/Jquery </li>
        <li>React + Redux + Less + ant Design </li>
      </ul></p>
      <p>開發: 
        <ul style="padding-left: 28px;">
          <li>1.  留言管理系統</li>
          <li>2.  網紅合作系統</li>
          <li>3.  數據管理系統</li>
        </ul>
      </p>
      <p>維護: Ln { APP } </p>`,
    },
    {
      id: 3,
      time: 'now',
      desc: '現在'
    }
  ],
  following: [
    {
      id: 1,
      avatar: 'https://randomuser.me/api/portraits/men/81.jpg',
      name: 'Eduardo Hernandez',
    },
    {
      id: 2,
      avatar:
        'https://images-na.ssl-images-amazon.com/images/M/MV5BMjEzMjA0ODk1OF5BMl5BanBnXkFtZTcwMTA4ODM3OQ@@._V1_UY256_CR5,0,172,256_AL_.jpg',
      name: ' Elizabeth Olsen',
    },
    {
      id: 3,
      avatar:
        'https://pbs.twimg.com/profile_images/1079706442763067392/wuaeGZnN.jpg',
      name: 'Hrvoje Šimić',
    },
    {
      id: 4,
      avatar:
        'https://images.pexels.com/photos/247885/pexels-photo-247885.jpeg?h=350&auto=compress&cs=tinysrgb',
      name: 'Monroe Bond',
    },
    {
      id: 5,
      avatar:
        'https://pbs.twimg.com/profile_images/974603248119222272/N5PLzyan.jpg',
      name: 'Nykyta Korotkevych',
    },
    {
      id: 6,
      avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
      name: 'Christine Maldonado',
    },
    {
      id: 7,
      avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
      name: 'Konsta Peura',
    },
    {
      id: 8,
      avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
      name: 'Britney Cooper',
    },
    {
      id: 9,
      avatar:
        'https://images-na.ssl-images-amazon.com/images/M/MV5BMjEzMjA0ODk1OF5BMl5BanBnXkFtZTcwMTA4ODM3OQ@@._V1_UY256_CR5,0,172,256_AL_.jpg',
      name: ' Elizabeth Olsen',
    },
    {
      id: 10,
      avatar:
        'https://pbs.twimg.com/profile_images/1079706442763067392/wuaeGZnN.jpg',
      name: 'Hrvoje Šimić',
    },
    {
      id: 11,
      avatar:
        'https://images.pexels.com/photos/247885/pexels-photo-247885.jpeg?h=350&auto=compress&cs=tinysrgb',
      name: 'Monroe Bond',
    },
    {
      id: 12,
      avatar:
        'https://pbs.twimg.com/profile_images/974603248119222272/N5PLzyan.jpg',
      name: 'Nykyta Korotkevych',
    },
    {
      id: 13,
      avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
      name: 'Christine Maldonado',
    },
    {
      id: 14,
      avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
      name: 'Konsta Peura',
    },
  ],
};

export default profileData;
