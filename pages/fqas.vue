<script setup lang="ts">

const {locale} = useI18n()
</script>
<template>
    <div v-if="locale==='en'" class="tw-px-10 tw-pb-10">
      <h2 class="tw-text-18 ">  How does YJOZ work?</h2 >
<p  class="tw-px-10">
YJOZ is a peer-to-peer rental platform — we connect people who need stuff with people who have stuff. Easy. 


</p> 
<h2 class="tw-text-18 ">If you want to rent something, just:</h2>
<ol class="tw-px-10">
    <li> Create a listing for the item</li>
    <li> Approve incoming rental requests</li>
    <li> Arrange a time to exchange your item with the renter</li>
    <li> Get paid through our secure payment system</li>
    <li> Find what you’re looking for</li>
    <li> Book the item for the dates you need it and get verified by us</li>
    <li> Arrange a time to collect your item from the renter and enjoy your rental</li>
    <li> Return the item to the renter and leave a review.</li>
</ol>



<h2 class="tw-text-18 ">Why rent out with us?
</h2>
<p class="tw-px-10">
    Rental industry is growing and we are fueling the growth with your products
made available to thousands of our customers.
We also are helping governments to save the environment and face climate change.
We are reducing the risk of running out of natural resources and industry and we encourage sustainable products and ideas.


</p>








<h2 class="tw-text-20  tw-underline">Cancellation Policy for Owners  </h2 >

<h2 class="tw-text-18  ">Cancellations from your end:</h2>

 <ol class="tw-px-10">
  <li>   There’s a 48-hour cooling-off period in which you’ll be fully reimbursed if you cancel a rental you’ve booked. Please note that if you book a rental within 48 hours of the rental start date (e.g., if you book a rental on Monday evening for Wednesday morning), then this cooling-off period does not apply.</li>
<li>  For rentals booked within 48 hours of the start of the rental, you will have a 3-hour cooling-off period to give yourself and the owner the opportunity to make sure the details of the handover will work out.
</li>
<li>  If you cancel after the 48-hour cooling-off period but sooner than 48 hours before the rental start date, you’ll incur a fee of 40% of the rental amount; the remainder of the rental amount will be refunded to you.
</li>

<li>  If you cancel within 48 hours of the start date, you won’t be reimbursed.
</li>
</ol>

<h2 class="tw-text-18 ">Cancellations by the owner:</h2>
<ol  class="tw-px-10">
    <li>  If an owner cancels a rental, you’ll be notified and fully reimbursed, and our customer service team will do all they can to help you find an alternative item. If you weren't expecting the rental to be canceled, let us know as soon as possible.

</li>
    <li>  If the owner doesn’t show up to hand over the item, please contact us as soon as possible. You’ll need to contact us within 12 hours of when the rental was scheduled to begin to receive a full reimbursement of the cost of the rental.
</li>
</ol>



<h2 class="tw-text-18 ">Refunds:</h2>
<ul  class="tw-px-10">
    <li>  If a rental has been cancelled before completing verification or being accepted by the owner, then the transaction will only be pending in your bank account. Once the request is cancelled, these funds are released on our end and will be returned to your available balance by your bank within a few days. You will not see a separate line item in your bank statement when the funds have been returned, they will simply be moved out of "pending" status.
</li>
    <li>  If a rental is cancelled after the owner has accepted it, then your funds will have been fully debited from your account. In this case, it will generally take 5–10 days from the time of cancellation for your refund to hit your bank account.
</li>
    <li>
  Any YJOZ credit you use on a rental will be automatically refunded when the transaction is cancelled.

</li>
</ul>

<h2 class="tw-text-18 ">
How do I cancel a rental?</h2>
<h2 class="tw-text-18 tw-px-18 tw-underline">For Owners</h2>
<h2 class="tw-text-18 tw-px-18">
    How do I decline a pending rental request?
</h2>
<p class="tw-px-10">
    •	Head to the ‘Lending’ tab of ‘My rentals’ on your dashboard. Click on the relevant rental and then click ‘Cancel request’.

</p>
<h2 class="tw-text-20 ">How do I cancel a rental offer before it’s been accepted by the Renter?</h2>
<p class="tw-px-10">•	Click on the trash icon in the top right corner of the offer box within the messaging tab.
</p>
<h2 class="tw-text-18 ">How do I cancel a rental request that I’ve already accepted?</h2>
<p class="tw-px-10">
    •	Once you've made the renter aware, go to the 'Activity' tab on your dashboard and select the rental in question, then click on the "Cancel Rental" VBtn. If this option is not showing as available, email us at info@yjoz.com and we can process it for you.
</p>
<h2 class="tw-text-18 tw-underline">
For Renters</h2>

<h2 class="tw-text-18 ">How do I cancel my rental request?</h2>
<p  class="tw-px-5">You can cancel your rental for yourself if:</p>
<ol  class="tw-px-10">
<li>   You have not yet verified

</li>
<li>   The Owner has not accepted your request
</li>
<li>   It is within 3 hours of making your rental request
</li>
<li>   It is within 48 hours of making your rental request, and also more than 48 hours before the rental starts.
</li>

</ol>

<p  class="tw-px-5">To do this, go to the 'Activity' tab on your dashboard and select the rental in question, then click on the "Cancel Rental" VBtn.
</p>
<p  class="tw-px-5">	If you are outside these cancellation parameters, please email info@yjoz.com, and we will help you process this.
Before canceling a rental, check our ‘<RouterLink to="privacy">Cancellation Policy</RouterLink>’.

</p>

<h2 class="tw-text-18 ">How does Verification work?</h2>
<p>Verification is a two-step process</p>

<p class="tw-font-semibold">
    Step 1: You upload documents

</p>
<p>Depending on the particular rental request, we may ask you for some or all of the following information:
</p>
<ul>
    <li>  ID (passport or driver’s license)
</li>
    <li>   A proof of address (bank statement, utility bill, or council letter) dated in the last 3 months
</li>
    <li>   A proof of employment (pay slip or invoice) dated in the last 3 months
 </li>
    <li>  A personal and/or professional website or social media link
</li>
    <li>   We store your documents on file, so you don’t have to re-upload the same documents again the next time you rent.
</li>
</ul>

<p class="tw-font-semibold">
    Step 2: We make a verification assessment
</p>

<p>After you have uploaded your documents, they also go through our verification system. Our algorithms factor in multiple data points, including the ID you’ve submitted, to determine a user's ability to rent on YJOZ.

While our verification algorithm is effective, being verified is not an endorsement of any renter or a guarantee of their identity. If at any stage you're uncomfortable accepting a rental (even if the transaction has been verified), please contact us at verify@yjoz.com or the support chat triage to discuss your concerns.

How long does verification take?

Though many of our rentals are processed automatically, it usually takes up to 30 minutes when manual verification is required. In exceptional cases, we might take up to 24 hours. Regular renters who have been verified before will have a smoother experience in the verification stage.
</p>
<h2 class="tw-text-18 ">
    The time it takes for a rental to be approved depends on:
</h2>
<ul>
    <li>   How quickly you're able to upload the required documents
</li>
    <li>   Whether you're a first-time or repeat borrower

</li>
    <li>   The type of rental you are requesting-higher-value rental requests require more rigorous verification assessments.

</li>
</ul>

<h2 class="tw-text-18 ">
Why do you need my ID and Address?</h2>

<p>The rental fee we charge along with the deposit is still less than the actual product value. To ensure the safety of our products and to ensure that the products are returned in good condition when due, we need to know you are a genuine renter. Getting ID and address proof will help us ensure the same. 
Your ID and address proof will never be shared with any third party.
	



</p>

    </div>
    <div v-else class="rtl">
        <div class="tw-px-10 tw-pb-10">
      <h2 class="tw-text-18 ">كيف يعمل YJOZ؟</h2 >
<p  class="tw-px-10">
YJOZ هي منصة تأجير بين الأفراد - نقوم بربط الأشخاص الذين يحتاجون إلى أشياء مع الأشخاص الذين يمتلكون تلك الأشياء. بسيطة.
</p> 
<h2 class="tw-text-18 ">إذا كنت ترغب في استئجار شيء، فقط قم بما يلي:</h2>
<ol class="tw-px-10">
    <li>قم بإنشاء إعلان للعنصر.</li>
    <li>وافق على طلبات الاستئجار الواردة.</li>
    <li>اتفق على موعد لتبادل العنصر مع المستأجر.</li>
    <li>احصل على أموالك من خلال نظام الدفع الآمن الخاص بنا.</li>
    <li>ابحث عن ما تحتاجه.</li>
    <li>احجز العنصر للفترة التي تحتاجها وتم التحقق منك بواسطتنا.</li>
    <li>اتفق على موعد لاستلام العنصر من المستأجر واستمتع بالإيجار.</li>
    <li>أعد العنصر إلى المستأجر واترك تقييمًا.</li>
</ol>
<h2 class="tw-text-18 ">لماذا يجب عليك تأجير عناصرك معنا؟
</h2>
<p class="tw-px-10">
    صناعة التأجير تنمو ونحن نساهم في هذا النمو عن طريق جعل منتجاتك متاحة لآلاف العملاء لدينا.
نحن أيضًا نساعد الحكومات في حفظ البيئة ومواجهة تغير المناخ.
نحن نقلل من خطر نفاد الموارد الطبيعية ونشجع المنتجات والأفكار المستدامة.
</p>
<h2 class="tw-text-20  tw-underline">سياسة الإلغاء للمالكين</h2>
<h2 class="tw-text-18  ">الإلغاء من جانبك:</h2>
 <ol class="tw-px-10">
  <li>يوجد فترة تبريد تستغرق 48 ساعة، خلالها سيتم استرداد المبلغ بالكامل إذا قمت بإلغاء الإيجار الذي حجزته. يرجى ملاحظة أنه إذا قمت بحجز إيجار خلال 48 ساعة من تاريخ بدء الإيجار (على سبيل المثال، إذا قمت بحجز إيجار يوم الاثنين مساءً لصباح يوم الأربعاء)، فإن فترة التبريد هذه لا تنطبق.</li>
<li>بالنسبة للإيجارات التي تم حجزها في غضون 48 ساعة من بداية الإيجار، ستحصل على فترة تبريد تستغرق 3 ساعات لتتيح لنفسك وللمالك فرصة التأكد من تفاصيل تسليم العنصر.
</li>
<li>إذا قمت بالإلغاء بعد انتهاء فترة التبريد المدتها 48 ساعة ولكن قبل 48 ساعة من تاريخ بدء الإيجار، ستتحمل رسومًا قدرها 40٪ من مبلغ الإيجار، وسيتم استرداد المبلغ المتبقي لك.
</li>
<li>إذا قمت بالإلغاء في غضون 48 ساعة من تاريخ البدء، فلن يتم استرداد المبلغ لك.
</li>
</ol>
<h2 class="tw-text-18 ">إلغاء من قبل المالك:</h2>
<ol  class="tw-px-10">
    <li>إذا قام المالك بإلغاء إيجار، ستتلقى إشعارًا وسيتم استرداد المبلغ بالكامل، وسيبذل فريق خدمة العملاء لدينا قصارى جهدهم لمساعدتك في العثور على عنصر بديل. إذا لم تكن تتوقع إلغاء الإيجار، فيرجى إعلامنا في أقرب وقت ممكن.
</li>
    <li>إذا لم يظهر المالك لتسليم العنصر، يرجى الاتصال بنا في أقرب وقت ممكن. ستحتاج إلى الاتصال بنا في غضون 12 ساعة من بدء وقت الإيجار المحدد.
</li>
</ol></div>
    </div>
</template>
<style scoped lang="scss">
.rtl{
    direction: rtl;
}
</style>