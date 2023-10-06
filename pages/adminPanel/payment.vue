<template>
  <div class="pt-[80px] p-4">

    <h1 class="capitalize text-2xl">product payment</h1>
    <span class="capitalize pt-[15px] border-b inline-block border-rose-600">Credit card</span>
    <div class="flex">
      <form action="" class="max-w-[450px] w-full mt-[35px] border p-4 shadow-lg bg-[#88888805] relative"
            @submit.prevent="setValues">
        <div class="border-gray border w-full border-box flex mb-[25px] relative">
          <input type="number" placeholder="Number" name="cartNumber" required v-model="cardNumber"
                 class="outline-none py-[5px] pl-[5px] bg-[unset]">
          <p v-if="isFalse" class="absolute text-[red] bottom-[-23px] text-[10px]">Card number must contain 16
            digits</p>
        </div>
        <div class="border-gray border w-full border-box flex mb-[25px]">
          <input type="text" placeholder="Full Name" name="userName" required v-model="fullName"
                 class="outline-none py-[5px] pl-[5px] bg-[unset]">
        </div>
        <div class="border-gray border w-full border-box flex mb-[25px]">
          <input type="date" placeholder="MM/YY" name="date" required v-model="date"
                 class="outline-none py-[5px] pl-[5px] bg-[unset]">
        </div>
        <div class="border-gray border w-full border-box flex mb-[25px]">
          <input type="number" placeholder="CVC" name="" required v-model="cardInfo"
                 class="outline-none py-[5px] pl-[5px] bg-[unset]">
        </div>
        <button class="btn my-0 mx-auto block">Submit</button>
        <p v-if="limited" class="absolute bottom-[70px] text-[red]">Max count of cards is 2</p>
      </form>
      <div class="cardsList p-4" v-if="cardsList.length > 0">
        <div class="max-w-[350px] w-full h-[170px] p-6 bg-[#337d4080] border rounded-lg" v-for="card in cardsList"
             :key="card.number">
          <div class="flex justify-between items-center">
            <div class="w-[50px] h-[35px] rounded-lg bg-[#CCC] flex column items-center mt-[15px]">
              <div class="w-[35px] h-[21px] rounded-tr-md rounded-br-md bg-[#DDD]"></div>
            </div>
            <img src="~/assets/img/msCard.png" alt="" class="w-[45px] object-contain">
          </div>
         
          <p class="w-full text-[white] opacity-[0.5] text-center text-[25px]">{{ card.number }}</p>
          <div class="flex justify-between">
            <p class="uppercase text-white bolder">{{ card.fullName }}</p>
            <div>
              <p class="uppercase text-white text-[12px]">{{ card.date }}</p>
              <p class="text-white">{{ card.cvc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const supabase = useSupabaseClient()

const date = ref()
const cardInfo = ref()
const fullName = ref()
const cardNumber = ref()
const cardsList = ref([])
const isFalse = ref(false)
const limited = ref(false)

async function setValues() {
  if (cardNumber.value.toString().length !== 16) {
    isFalse.value = true
  } else {
    if (cardsList.value.length === 2) {
      limited.value = true
      return;
    }
    const {data, error} = await supabase
        .from('cards')
        .insert([
          {number: cardNumber.value, cvc: cardInfo.value, fullName: fullName.value, date: date.value},
        ])
        .select()

    cardNumber.value = ''
    cardInfo.value = ''
    fullName.value = ''
    date.value = ''

  }
}

async function getCards() {

  let {data: cards, error} = await supabase
      .from('cards')
      .select()
  cardsList.value = cards
}


definePageMeta({
  layout: 'admin-panel',
})


onMounted(() => {
  getCards();
})

</script>

<style scoped>

</style>