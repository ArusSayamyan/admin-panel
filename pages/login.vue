<template>
  <div class="flex justify-center p-4 gap-x-10 container">
    <div class="register max-w-[450px] container">
      <form action="" class="registerForm container border-2 p-4 bg-[#8881] rounded" @submit.prevent="signIn">
        <h2 class="text-center mb-5 uppercase">Sign in</h2>
        <div class="flex flex-col mb-[15px]">
          <label for="lastname" class="pb-2">email</label>
          <input type="email" name="lastname" v-model="mail" id="lastname" autocomplete="off"
                 class="p-1.5 rounded outline-none">
        </div>
        <div class="flex flex-col mb-[15px]">
          <label for="password" class="pb-2">password</label>
          <input type="password" name="password" v-model="pass" id="password" autocomplete="off"
                 class="p-1.5 rounded outline-none">
        </div>
        <button type="submit" class="btn mx-auto block uppercase">sign in</button>
      </form>
    </div>

    <div class="register max-w-[450px] container">
      <form action="" class="registerForm container border-2 p-4 bg-[#8881] rounded" @submit.prevent="submitForm">
        <h2 class="text-center mb-5 uppercase">Registration</h2>
        <div class="flex flex-col mb-[15px]">
          <label for="regName" class="pb-2">name</label>
          <input type="text" name="name" id="regName" v-model="regName" autocomplete="off"
                 class="p-1.5 rounded outline-none">
        </div>
        <div class="flex flex-col mb-[15px]">
          <label for="regLastname" class="pb-2">lastname</label>
          <input type="text" name="lastname" id="regLastname" v-model="regLastname" autocomplete="off"
                 class="p-1.5 rounded outline-none">
        </div>
        <div class="flex flex-col mb-[15px]">
          <label for="email" class="pb-2">email</label>
          <input type="email" name="email" id="email" v-model="regEmail" autocomplete="off"
                 class="p-1.5 rounded outline-none">
        </div>
        <div class="flex flex-col mb-[15px]">
          <label for="password" class="pb-2">password</label>
          <input type="password" name="newPassword" autocomplete="off" v-model="regPassword" id="newPassword"
                 class="p-1.5 rounded outline-none">
        </div>
        <div class="flex flex-col mb-[15px]">
          <label for="password" class="pb-2">repeat password</label>
          <input type="password" name="repeat" id="repeat" v-model="repeatPassword" autocomplete="off"
                 class="p-1.5 rounded outline-none">
        </div>
        <button type="submit" class="btn mx-auto block uppercase">Register</button>
      </form>
    </div>
  </div>
</template>


<script setup>
const router = useRouter();
const client = useSupabaseClient()
const regName = ref()
const regLastname = ref()
const regEmail = ref()
const regPassword = ref()
const mail = ref()
const pass = ref()
const repeatPassword = ref()

async function submitForm() {
  try {
    const {data, error} = await client.auth.signUp({
          email: regEmail.value,
          password: regPassword.value
        },
        {
          data: {
            first_name: 'John',
            age: 27,
          }
        }
    )
    regName.value = ''
    regLastname.value = ''
    regEmail.value = ''
    regPassword.value = ''
    repeatPassword.value = ''
    if (error) throw error
  } catch (error) {
    console.log(error)
  }
}


async function signIn() {
  try {
    const {error} = await client.auth.signInWithPassword({
          email: mail.value,
          password: pass.value,
        },
    )
    regEmail.value = ''
    regPassword.value = ''
    if (error) throw error
    await router.push('/adminPanel')
  } catch (error) {
    alert(error)
  }
}

</script>

<style scoped>

</style>