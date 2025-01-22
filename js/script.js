function validateForm() {
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;
            if (name === "" || email === "" || message === "") {
                alert("يرجى ملء جميع الحقول.");
                return false;
            }
            alert("شكرًا لتواصلكم معنا!");
            return true;
        }

// وظيفة للتحقق من صحة البريد الإلكتروني
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}





// وظيفة لتغيير لون الخلفية عند الضغط على زر
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}




// وظيفة لإضافة تقييم جديد
function addReview(event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة
    
    const name = document.getElementById("customerName").value;
    const rating = document.getElementById("customerRating").value;
    const feedback = document.getElementById("customerFeedback").value;
    
    const reviewList = document.getElementById("reviewList");
    const newReview = document.createElement("article");
    newReview.classList.add("review");
    
    newReview.innerHTML = `<h3>${name} - ${rating}</h3><p>${feedback}</p>`;
    reviewList.appendChild(newReview);
    
    // مسح المدخلات بعد الإرسال
    document.getElementById("reviewForm").reset();
    
    alert("شكرًا لتقديم تقييمك!");
    return false; // منع إعادة تحميل الصفحة
}


// وظيفة لإعادة تعيين النموذج
function resetForm() {
    document.getElementById("contactForm").reset();
    alert("تم إعادة تعيين النموذج.");
}





// وظيفة لتحديد التمرير إلى أعلى الصفحة
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}



// تحميل عناصر القائمة عند فتح الصفحة
fetchMenuItems();

 function orderItem(itemName) {
            alert(`تم إضافة ${itemName} إلى سلة الطلبات!`);
        }
		
	// وظيفة لإضافة عنصر إلى سلة المشتريات
function addToCart(item) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${item.name} تم إضافته إلى سلة المشتريات!`);
}