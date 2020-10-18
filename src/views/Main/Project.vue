<template>
  <div class="container">
    <div class="project">
      <div class="project__heading">
        <h1 class="heading-xl">Layihə haqqında</h1>
        <div class="bookmark">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Icon/Outline/bookmark">
              <path
                id="Mask"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.8212 15.5059C11.9902 15.5059 12.1602 15.5489 12.3132 15.6349L17.0002 18.2859V5.33388C17.0002 5.13288 16.8792 4.99988 16.8002 4.99988H7.20024C7.12024 4.99988 7.00024 5.13288 7.00024 5.33388V18.2339L11.3062 15.6489C11.4652 15.5539 11.6432 15.5059 11.8212 15.5059ZM6.00024 20.9999C5.83024 20.9999 5.66024 20.9569 5.50724 20.8699C5.19424 20.6929 5.00024 20.3599 5.00024 19.9999V5.33388C5.00024 4.04688 5.98724 2.99988 7.20024 2.99988H16.8002C18.0132 2.99988 19.0002 4.04688 19.0002 5.33388V19.9999C19.0002 20.3559 18.8112 20.6849 18.5042 20.8639C18.1962 21.0439 17.8182 21.0469 17.5082 20.8709L11.8362 17.6629L6.51424 20.8579C6.35624 20.9519 6.17824 20.9999 6.00024 20.9999Z"
                fill="#231F20"
              />
              <mask
                id="mask0"
                mask-type="alpha"
                maskUnits="userSpaceOnUse"
                x="5"
                y="2"
                width="15"
                height="20"
              >
                <path
                  id="Mask_2"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.8212 15.5059C11.9902 15.5059 12.1602 15.5489 12.3132 15.6349L17.0002 18.2859V5.33388C17.0002 5.13288 16.8792 4.99988 16.8002 4.99988H7.20024C7.12024 4.99988 7.00024 5.13288 7.00024 5.33388V18.2339L11.3062 15.6489C11.4652 15.5539 11.6432 15.5059 11.8212 15.5059ZM6.00024 20.9999C5.83024 20.9999 5.66024 20.9569 5.50724 20.8699C5.19424 20.6929 5.00024 20.3599 5.00024 19.9999V5.33388C5.00024 4.04688 5.98724 2.99988 7.20024 2.99988H16.8002C18.0132 2.99988 19.0002 4.04688 19.0002 5.33388V19.9999C19.0002 20.3559 18.8112 20.6849 18.5042 20.8639C18.1962 21.0439 17.8182 21.0469 17.5082 20.8709L11.8362 17.6629L6.51424 20.8579C6.35624 20.9519 6.17824 20.9999 6.00024 20.9999Z"
                  fill="white"
                />
              </mask>
            </g>
          </svg>
        </div>
      </div>
      <div class="project__image">
        <img src="@/assets/img/startup.jpeg" alt="" />
      </div>
      <div class="project__heading">
        <h1 class="heading-xl">{{ project.name }}</h1>
        <h6 class="heading-l project__heading--view-count">
          {{ project.viewCount }} <span>baxış</span>
        </h6>
      </div>
      <p class="project__about">{{ project.about }}</p>
      <h1 class="heading-xl">Əlaqə</h1>
      <div class="project__contact">
        <div class="project__contact--item">
          <img src="@/assets/icons/email.svg" alt="" />
          {{ project.contact.email }}
        </div>
        <div class="project__contact--item">
          <img src="@/assets/icons/pin.svg" alt="" />
          {{ project.contact.address }}
        </div>
        <div class="project__contact--item">
          <img src="@/assets/icons/phone.svg" alt="" />
          {{ project.contact.phone }}
        </div>
        <div class="project__contact--item">
          <img src="@/assets/icons/globe.svg" alt="" />
          {{ project.contact.website }}
        </div>
      </div>
      <button class="button-blue-bg-rounded" @click="shareProject()">
        <img src="@/assets/icons/pencil.svg" alt="" />
        Müraciət et
      </button>
      <button
        class="button-transparent"
        v-if="!showApplicants"
        @click="showApplicants = true"
      >
        {{ project.applyCount }} nəfər müraciət edib
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="Icon/Outline/arrow-left">
            <path
              id="Mask"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19 11H7.135L10.768 6.63997C11.122 6.21597 11.064 5.58497 10.64 5.23197C10.215 4.87797 9.585 4.93597 9.232 5.35997L4.232 11.36C4.193 11.407 4.173 11.462 4.144 11.514C4.12 11.556 4.091 11.592 4.073 11.638C4.028 11.753 4.001 11.874 4.001 11.996C4.001 11.997 4 11.999 4 12C4 12.001 4.001 12.003 4.001 12.004C4.001 12.126 4.028 12.247 4.073 12.362C4.091 12.408 4.12 12.444 4.144 12.486C4.173 12.538 4.193 12.593 4.232 12.64L9.232 18.64C9.43 18.877 9.714 19 10 19C10.226 19 10.453 18.924 10.64 18.768C11.064 18.415 11.122 17.784 10.768 17.36L7.135 13H19C19.552 13 20 12.552 20 12C20 11.448 19.552 11 19 11Z"
              fill="#000"
            />
            <mask
              id="mask0"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="4"
              y="5"
              width="16"
              height="14"
            >
              <path
                id="Mask_2"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19 11H7.135L10.768 6.63997C11.122 6.21597 11.064 5.58497 10.64 5.23197C10.215 4.87797 9.585 4.93597 9.232 5.35997L4.232 11.36C4.193 11.407 4.173 11.462 4.144 11.514C4.12 11.556 4.091 11.592 4.073 11.638C4.028 11.753 4.001 11.874 4.001 11.996C4.001 11.997 4 11.999 4 12C4 12.001 4.001 12.003 4.001 12.004C4.001 12.126 4.028 12.247 4.073 12.362C4.091 12.408 4.12 12.444 4.144 12.486C4.173 12.538 4.193 12.593 4.232 12.64L9.232 18.64C9.43 18.877 9.714 19 10 19C10.226 19 10.453 18.924 10.64 18.768C11.064 18.415 11.122 17.784 10.768 17.36L7.135 13H19C19.552 13 20 12.552 20 12C20 11.448 19.552 11 19 11Z"
                fill="white"
              />
            </mask>
          </g>
        </svg>
      </button>
      <h1 class="heading-xl" v-if="showApplicants">
        Müraciət edənlər ({{ project.applyCount }})
      </h1>
      <div class="project__apllicants" v-if="showApplicants">
        <userChip
          v-for="(applicant, index) in project.applicants"
          :key="index"
          :item="applicant"
        ></userChip>
      </div>
    </div>
  </div>
</template>

<script>
import userChip from "@/components/UserChip";
export default {
  name: "project",
  components: {
    userChip
  },
  data() {
    return {
      showApplicants: false,
      project: {
        name: "Azərbaycan Texniki Universiteti müsabiqə elan edir",
        reviewCount: null,
        about: `Azərbaycan və ya rəsmi adı ilə Azərbaycan Respublikası — Cənubi Qafqazda yerləşən dövlət. Azərbaycan Xəzər dənizi hövzəsinin qərbində yerləşir. Şimaldan Rusiya (Dağıstan) şimal-qərbdən Gürcüstan, qərbdən Ermənistan, cənub-qərbdən Türkiyə və cənubdan İran ilə həmsərhəddir.Azərbaycanın anklavı olan Naxçıvan Muxtar Respublikası Ermənistanla şimal-şərqdə, İranla qərbdə və Türkiyə ilə şimal-qərbdən həmsərhəddir. Azərbaycan ərazisinin bir hissəsi (Dağlıq Qarabağ bölgəsi və ona bitişik 7 inzibati rayon) Ermənistan Respublikası tərəfindən işğal edilib, bu da ölkə ərazisinin 20%-ni təşkil edir.Dövlət sərhədləri cənubdan İranla 765 km, Türkiyə ilə 15 km, şimaldan Rusiya ilə 391 km, şimal-qərbdən Gürcüstan ilə 471 km, qərbdən Ermənistan ilə 1007 km həmsərhəddir.Onun 825 km-i su sərhəddidir. Sahil xəttinin uzunluğu 713 km-dir.1Azərbaycanın Xəzər dənizi sektorunda həmcinin Türkmənistan, Qazaxıstan, İran və Rusiya sərhədə malikdir.Yer kürəsində məlum olan 2000-dən artıq palçıq vulkanlarından 344-ü Azərbaycanın şərqində və onunla həmsərhəd Xəzər hövzəsində yerləşir. Ölkədə 9 milli park, 11 dövlət təbiət qoruğu və 24 dövlət təbiət yasaqlığı fəaliyyət göstərir. Azərbaycanın ən böyük beş adası — Kür Dili, Pirallahı, Çilov, Xərə Zirə və Böyük Zirə adalarıdır. Azərbaycan əhalisi 9,6 milyon nəfərdir və bu göstəriciyə görə dünyada 92-ci yerdədir. Paytaxtı Bakı şəhəridir. Azərbaycan paytaxt Bakıdan kənarda, ölkə 65 inzibati vahidə (o cümlədən 59 rayon və 6 şəhər) və Naxçıvan Muxtar Respublikasına (6 rayon və paytaxt Naxçıvan şəhərindən ibarət olan) bölünür.`,
        bookmarked: false,
        viewCount: 4565,
        applyCount: 122,
        applicants: [
          {
            name: "Məmməd Qurbanov",
            about:
              "I am front end developer since 2018. I am working in somewhere in the world"
          },
          {
            name: "Əbdürrəhim bəy Haqverdiyev Cavanşir",
            about:
              "I am front end developer since 2018. I am working in somewhere in the world"
          },
          {
            name: "Angelina Jolie",
            about:
              "I am front end developer since 2018. I am working in somewhere in the world"
          },
          {
            name: "Christian Bale",
            about:
              "I am front end developer since 2018. I am working in somewhere in the world"
          }
        ],
        contact: {
          email: "teammate@gmail.com",
          address: "Seller st. Baku, Azerbaijan",
          phone: "+994 50 123123123",
          website: "www.findyourteammate.com"
        }
      }
    };
  }
};
</script>
