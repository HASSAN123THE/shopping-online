// الحصول على العنصر الأساسي
let body = document.getElementById("conetnt");

for (let i = 1; i <= 10; i++) {
    if (body) {
        function card() {
            let card = document.createElement("div");
            let imge = document.createElement("img");
            let name = document.createElement("h5");
            let price = document.createElement("p");
            let btn = document.createElement("button"); // تغيير <btn> إلى <button>
    
            // إضافة الكلاسات
            card.className = "card";
            imge.src = "../photos/moon.png";
            name.textContent = "hi";
            price.textContent = "13$";
            btn.className = "btn";
            btn.textContent = "add to cart"
            btn.textContent = "Click Me"; // إضافة نص للزر
    
            // إضافة العناصر إلى الصفحة
            card.append(imge, name, price, btn);
            body.append(card); 
    
            return card;
        }
    
        // إنشاء بطاقة جديدة عند تحميل الصفحة
        card();
    } else {
        console.error("لم يتم العثور على العنصر بـ id='conetnt'");
    }
     
}

