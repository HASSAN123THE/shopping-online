import { data } from "./data.js"; // استيراد البيانات

let body = document.getElementById("content"); // الحصول على العنصر الرئيسي

if (body && data.length > 0) {
    let cards = data.map((item) => {
        // إنشاء عناصر الكرت
        let card = document.createElement("div");
        let img = document.createElement("img");
        let name = document.createElement("h5");
        let price = document.createElement("p");
        let btn = document.createElement("button");

        // إضافة الكلاسات
        card.className = "card";
        img.src = item.image;
        name.textContent = item.title;
        price.textContent = `$${item.price}`;
        btn.className = "btn";
        btn.textContent = "Add to Cart";

        // إضافة العناصر للكرت
        card.append(img, name, price, btn);

        return card; // إرجاع الكرت
    });

    // إضافة جميع الكروت إلى العنصر الأساسي
    body.append(...cards);
} else {
    console.error("العنصر #content غير موجود أو لا توجد بيانات في data.js");
}
