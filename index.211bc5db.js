var e=document.querySelector("body"),t=new Promise(function(e,t){document.addEventListener("click",function(){e("First promise was resolved")}),setTimeout(function(){t(Error("First promise was rejected"))},3e3)}),n=new Promise(function(e){document.addEventListener("click",function(){e("Second promise was resolved")}),document.addEventListener("contextmenu",function(){e("Second promise was resolved")})}),o=Promise.all([new Promise(function(e){document.addEventListener("click",function(){e()})}),new Promise(function(e){document.addEventListener("contextmenu",function(){e()})})]);function i(t){var n=document.createElement("div");n.setAttribute("data-qa","notification"),n.classList="success",n.textContent=t,e.append(n)}t.then(function(e){i(e)}).catch(function(t){var n;(n=document.createElement("div")).setAttribute("data-qa","notification"),n.classList="error",n.textContent=t,e.append(n)}),n.then(function(e){i(e)}),o.then(function(){i("Third promise was resolved")});
//# sourceMappingURL=index.211bc5db.js.map