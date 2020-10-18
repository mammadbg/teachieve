<template>
  <div class="new-project">
    <div class="container">
      <h1 class="heading-xl">Layihəni paylaş</h1>
      <label class="new-project__image" for="imageInput">
        <img src="@/assets/img/image.png" alt="" />
      </label>
      <h1 class="heading-xl py-0">Kateqoriya</h1>
      <Tags></Tags>
      <h1 class="heading-xl">İnfo</h1>
      <input
        type="text"
        class="input-gray-outlined"
        placeholder="Layihənin adı*"
        required
        v-model="project.name"
      />
      <textarea
        type="text"
        class="input-gray-outlined"
        placeholder="Layihə haqqında"
        v-model="project.about"
      ></textarea>
      <input
        type="text"
        class="input-gray-outlined"
        placeholder="Ünvan"
        v-model="project.contact.address"
      />
      <input
        type="email"
        class="input-gray-outlined"
        placeholder="Email*"
        required
        v-model="project.contact.email"
      />
      <input
        type="tel"
        class="input-gray-outlined"
        placeholder="Telefon"
        v-model="project.contact.phone"
      />
      <input
        type="url"
        class="input-gray-outlined"
        placeholder="Website*"
        required
        v-model="project.contact.website"
      />
      <button class="button-blue-bg-rounded" @click="shareProject()">
        <img src="@/assets/icons/pencil.svg" alt="" />
        Paylaş
      </button>
    </div>
  </div>
</template>

<script>
import Tags from "@/components/Tags.vue";
export default {
  components: {
    Tags
  },
  data() {
    return {
      project: {
        name: "",
        about: "",
        categoryIds: [],
        contact: {
          email: "",
          address: "",
          phone: "",
          website: ""
        }
      }
    };
  },
  methods: {
    shareProject() {
      console.log("new project", this.project);
    }
  }
};
</script>
