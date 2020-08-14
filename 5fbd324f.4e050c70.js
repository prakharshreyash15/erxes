(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{172:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(2),r=n(9),i=(n(0),n(213)),o={id:"digitalocean",title:"DigitalOcean Marketplace"},l={id:"installation/digitalocean",title:"DigitalOcean Marketplace",description:"Launch a Droplet using erxes in the DigitalOcean Marketplace.",source:"@site/docs/installation/digitalocean.md",permalink:"/installation/digitalocean",editUrl:"https://github.com/erxes/erxes/edit/develop/docs/docs/installation/digitalocean.md",lastUpdatedBy:"Batnasan Byambasuren",lastUpdatedAt:1597404210,sidebar:"docs",previous:{title:"AWS Marketplace",permalink:"/installation/aws"},next:{title:"Upgrade",permalink:"/installation/upgrade"}},c=[{value:"Connect to your droplet",id:"connect-to-your-droplet",children:[]},{value:"Configure NGINX",id:"configure-nginx",children:[]},{value:"Install Let&#39;s Encrypt using Certbot",id:"install-lets-encrypt-using-certbot",children:[]},{value:"Configure <code>erxes</code>",id:"configure-erxes",children:[{value:"Configure PM2 <code>ecosystem.config.js</code>",id:"configure-pm2-ecosystemconfigjs",children:[]},{value:"Configure frontend environment variables",id:"configure-frontend-environment-variables",children:[]},{value:"export MongoDB URL",id:"export-mongodb-url",children:[]},{value:"Initialize and Load permissions for erxes",id:"initialize-and-load-permissions-for-erxes",children:[]},{value:"Congratulations, time to log in",id:"congratulations-time-to-log-in",children:[]}]}],b={rightToc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Launch a Droplet using ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://marketplace.digitalocean.com/apps/erxes"}),"erxes")," in the DigitalOcean Marketplace."),Object(i.b)("h2",{id:"connect-to-your-droplet"},"Connect to your droplet"),Object(i.b)("p",null,"Connect to your droplet via ssh."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"ssh root@YOUR_DROPLET_PUBLIC_IP\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"YOUR_DROPLET_PUBLIC_IP")," is your droplet public IP address")),Object(i.b)("h2",{id:"configure-nginx"},"Configure NGINX"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"You need to replace the ",Object(i.b)("inlineCode",{parentName:"li"},"YOUR_DOMAIN_COM")," with your actual ",Object(i.b)("inlineCode",{parentName:"li"},"domain name")," in the nginx config file ",Object(i.b)("inlineCode",{parentName:"li"},"/etc/nginx/sites-available/default"),".")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"nano /etc/nginx/sites-available/default\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"After replacing YOUR_DOMAIN_COM with your actual domain name. Save with ctrl + x and then y to accept the changes.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Test the ",Object(i.b)("strong",{parentName:"p"},"NGINX")," configuration to make sure you don't have any errors"))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"nginx -t\n")),Object(i.b)("p",null,"You should see the following output:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"nginx: the configuration file /etc/nginx/nginx.conf syntax is ok\nnginx: configuration file /etc/nginx/nginx.conf test is successful\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Reload nginx service")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"systemctl reload nginx\n")),Object(i.b)("h2",{id:"install-lets-encrypt-using-certbot"},"Install Let's Encrypt using Certbot"),Object(i.b)("p",null,"Execute Certbot. You will asked several questions, you can answer as follows:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Enter your email address"),Object(i.b)("li",{parentName:"ul"},"Agree with the ",Object(i.b)("strong",{parentName:"li"},"Terms of Service")),Object(i.b)("li",{parentName:"ul"},"Answer ",Object(i.b)("inlineCode",{parentName:"li"},"Yes")," or ",Object(i.b)("inlineCode",{parentName:"li"},"No"),", if you want to share your email address with the Electronic Frontier Foundation"),Object(i.b)("li",{parentName:"ul"},"Select the corresponding number associated with your domain name, usually ",Object(i.b)("inlineCode",{parentName:"li"},"1")),Object(i.b)("li",{parentName:"ul"},"Choose ",Object(i.b)("inlineCode",{parentName:"li"},"2")," to redirect all your traffic to a secure ",Object(i.b)("strong",{parentName:"li"},"HTTPS"))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"certbot --nginx\n")),Object(i.b)("h2",{id:"configure-erxes"},"Configure ",Object(i.b)("inlineCode",{parentName:"h2"},"erxes")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Run the following to change the password for ",Object(i.b)("inlineCode",{parentName:"li"},"erxes")," and switch to user ",Object(i.b)("inlineCode",{parentName:"li"},"erxes"),".")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"passwd erxes\nsu erxes\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The rest of the steps are run as ",Object(i.b)("inlineCode",{parentName:"li"},"erxes")," user.")),Object(i.b)("h3",{id:"configure-pm2-ecosystemconfigjs"},"Configure PM2 ",Object(i.b)("inlineCode",{parentName:"h3"},"ecosystem.config.js")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Run the following command to replace ",Object(i.b)("inlineCode",{parentName:"li"},"YOUR_DOMAIN_COM")," with your actual domain name. Please use ",Object(i.b)("inlineCode",{parentName:"li"},"your domain")," for ",Object(i.b)("inlineCode",{parentName:"li"},"your.domain.com"),".")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cd ~/erxes.io\nsed -i 's/YOUR_DOMAIN_COM/your.domain.com/g' ecosystem.config.js\n")),Object(i.b)("h3",{id:"configure-frontend-environment-variables"},"Configure frontend environment variables"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Open the ",Object(i.b)("inlineCode",{parentName:"li"},"~/erxes.io/erxes/js/env.js")," file in the nano editor.")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"nano ~/erxes.io/erxes/js/env.js\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Copy the following ",Object(i.b)("strong",{parentName:"li"},"environment variables")," in between the ",Object(i.b)("strong",{parentName:"li"},"{ }"),", and replace ",Object(i.b)("strong",{parentName:"li"},"YOUR_DOMAIN_COM")," with your actual domain name.")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'NODE_ENV: "production",\nREACT_APP_API_URL: "https://YOUR_DOMAIN_COM/api",\nREACT_APP_API_SUBSCRIPTION_URL: "wss://YOUR_DOMAIN_COM/api/subscriptions",\nREACT_APP_CDN_HOST: "https://YOUR_DOMAIN_COM/widgets"\n')),Object(i.b)("p",null,"It should look like this, but ",Object(i.b)("strong",{parentName:"p"},"with your actual domain name"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'window.env = {\n    NODE_ENV: "production",\n    REACT_APP_API_URL: "https://erxes.example.com/api",\n    REACT_APP_API_SUBSCRIPTION_URL: "wss://erxes.example.com/api/subscriptions",\n    REACT_APP_CDN_HOST: "https://erxes.example.com/widgets"\n}\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"save the file with ",Object(i.b)("inlineCode",{parentName:"li"},"ctrl + x")," and then ",Object(i.b)("inlineCode",{parentName:"li"},"y")," to accept all changes.")),Object(i.b)("p",null,"You are now ready to ",Object(i.b)("strong",{parentName:"p"},"initialize")," and ",Object(i.b)("strong",{parentName:"p"},"load the permissions")," in ",Object(i.b)("strong",{parentName:"p"},"erxes"),"."),Object(i.b)("h3",{id:"export-mongodb-url"},"export MongoDB URL"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cd ~/erxes.io\nnano ecosystem.config.js\n")),Object(i.b)("p",null,'Locate the "MONGO_URL": "mongodb://erxes:82e3e42ef31e51d51687b366118200e2@localhost/erxes?authSource=admin&replicaSet=rs0", under the erxes-api.'),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Copy the MONGO_URL and exit the nano editor with ctrl + x.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Now you will need to export and set the variable MONGO_URL, with the copied URL. See below:"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Example:")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'# example\n# export MONGO_URL="mongodb://erxes:92c54fa1f0658xxxxc2d9ce618b008b4@localhost/erxes?authSource=admin&replicaSet=rs0"\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Use your copied MONGO_URL below:")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'export MONGO_URL="YOUR_COPIED_MONGO_URL_HERE"\n')),Object(i.b)("h3",{id:"initialize-and-load-permissions-for-erxes"},"Initialize and Load permissions for erxes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"initialize Erxes and generate ",Object(i.b)("strong",{parentName:"li"},"login password"),".")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"source ~/.nvm/nvm.sh\nnvm use default\ncd ~/erxes.io/erxes-api/dist\nnode commands/initProject\n")),Object(i.b)("p",null,"You should have a generated ",Object(i.b)("strong",{parentName:"p"},"password"),". The output will be similar to this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"Your new password: HcEjfBMxws\n\n# note this down\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Run this final command to finish the installation of ",Object(i.b)("strong",{parentName:"li"},"erxes"),".")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cd ~/erxes.io/erxes-api/dist\nnode commands/loadPermissionData\n\ncd ~/erxes.io\npm2 restart ecosystem.config.js\n")),Object(i.b)("h3",{id:"congratulations-time-to-log-in"},"Congratulations, time to log in"),Object(i.b)("p",null,"You may now visit your domain, and log in."),Object(i.b)("p",null,"The username is ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",Object(a.a)({parentName:"strong"},{href:"mailto:admin@erxes.io"}),"admin@erxes.io")),", and the password is the password generated above."))}s.isMDXComponent=!0},213:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(n),O=a,d=p["".concat(o,".").concat(O)]||p[O]||u[O]||i;return n?r.a.createElement(d,l(l({ref:t},b),{},{components:n})):r.a.createElement(d,l({ref:t},b))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=O;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var b=2;b<i;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);