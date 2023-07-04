<script setup lang="ts">
import LogoY from  '@/assets/svg/home/LogoY.svg';

const {locale} = useI18n()
</script>
<template>
    <div 
    v-if="locale==='en'"
    class="tw-grid lg:tw-grid-cols-2 tw-grid-cols-1 lg:tw-p-10">

        <div>
            <h2>The Issue</h2>
<p>We reside in a society where countless products are produced unnecessarily, individuals possess belongings they may only utilize once a year, and it’s Harm the environment and climate, when we want to get rid of them, and we have been persuaded as consumers that acquiring more is the key to obtaining what we require.
</p>
<h2>Our Perspective</h2>
<p>We don't subscribe to that belief. We encourage people to consume less and embrace the concept of sharing.
</p>
<h2>Our Objective</h2>

<p>Our goal is to provide a cost-effective and convenient means of accessing any item, regardless of location, without the need for purchasing it.
And help UAE Government & World to protect the environment, Climate and our earth with Sustainability trading.
   </p>
</div>
        <div class="tw-flex tw-justify-center tw-items-center">
<img :src="LogoY"  class=" tw-w-[300px]" alt="">

        </div>
    </div>
    <div v-else>
         <h2>المشكلة</h2>

<p>نعيش في مجتمع يتم إنتاج العديد من المنتجات بشكل غير ضروري، والأفراد يمتلكون ممتلكات يمكنهم استخدامها مرة واحدة في السنة فقط، وهذا يضر بالبيئة والمناخ عندما نرغب في التخلص منها، وقد تم إقناعنا كمستهلكين أن اقتناء المزيد هو المفتاح للحصول على ما نحتاجه.
</p>
<h2>موقفنا</h2>
<p>نحن لا نؤيد هذا الاعتقاد. نشجع الناس على تقليل استهلاكهم وتبني مفهوم المشاركة.
</p>
<h2>هدفنا</h2>
<p>هدفنا هو توفير وسيلة فعالة من حيث التكلفة وملائمة للوصول إلى أي عنصر، بغض النظر عن موقعه، دون الحاجة إلى شرائه.
ومساعدة حكومة الإمارات العربية المتحدة والعالم على حماية البيئة والمناخ وكوكبنا من خلال التجارة المستدامة.
   </p>
   <div class="tw-flex tw-justify-center tw-items-center">
<img :src="LogoY"  class=" tw-w-[300px]" alt="">


    </div>
</div>


</template>