<template>
  <div class="home">
    <div class="container">
      <Tags></Tags>
      <div class="premium">
        <div class="premium__head">
          <h1 class="heading-xl">Permium layihələr</h1>
          <img src="@/assets/icons/star.svg" alt="" />
        </div>
        <div class="premium__content" id="premiumCardsContent">
          <div class="column" v-for="(item, i) in items" :key="i">
            <PremiumCard :item="item"></PremiumCard>
          </div>
          <button class="button-blue-outlined right-arrow">
            Daha çox göstər
            <img src="@/assets/icons/arrow-right.svg" alt="" />
          </button>
        </div>
        <button class="button-scroll--left" @click="scrollToLeft()">
          <img src="@/assets/icons/chevron-right.svg" alt="" />
        </button>
        <button class="button-scroll--right" @click="scrollToRight()">
          <img src="@/assets/icons/chevron-right.svg" alt="" />
        </button>
      </div>
      <div class="projects">
        <div class="projects__head">
          <h1 class="heading-xl">Layihələr</h1>
        </div>
        <div class="projects__content">
          <ProjectCard v-for="(b, i) in 16" :key="i + 56"></ProjectCard>
          <button class="button-blue-outlined down-arrow">
            Daha çox göstər
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Icon/Outline/arrow-left">
                <path
                  id="Mask"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19 11H7.135L10.768 6.64003C11.122 6.21603 11.064 5.58503 10.64 5.23203C10.215 4.87803 9.585 4.93603 9.232 5.36003L4.232 11.36C4.193 11.407 4.173 11.462 4.144 11.514C4.12 11.556 4.091 11.592 4.073 11.638C4.028 11.753 4.001 11.874 4.001 11.996C4.001 11.997 4 11.999 4 12C4 12.001 4.001 12.003 4.001 12.004C4.001 12.126 4.028 12.247 4.073 12.362C4.091 12.408 4.12 12.444 4.144 12.486C4.173 12.538 4.193 12.593 4.232 12.64L9.232 18.64C9.43 18.877 9.714 19 10 19C10.226 19 10.453 18.924 10.64 18.768C11.064 18.415 11.122 17.784 10.768 17.36L7.135 13H19C19.552 13 20 12.552 20 12C20 11.448 19.552 11 19 11Z"
                  fill="#149CFF"
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
                    d="M19 11H7.135L10.768 6.64003C11.122 6.21603 11.064 5.58503 10.64 5.23203C10.215 4.87803 9.585 4.93603 9.232 5.36003L4.232 11.36C4.193 11.407 4.173 11.462 4.144 11.514C4.12 11.556 4.091 11.592 4.073 11.638C4.028 11.753 4.001 11.874 4.001 11.996C4.001 11.997 4 11.999 4 12C4 12.001 4.001 12.003 4.001 12.004C4.001 12.126 4.028 12.247 4.073 12.362C4.091 12.408 4.12 12.444 4.144 12.486C4.173 12.538 4.193 12.593 4.232 12.64L9.232 18.64C9.43 18.877 9.714 19 10 19C10.226 19 10.453 18.924 10.64 18.768C11.064 18.415 11.122 17.784 10.768 17.36L7.135 13H19C19.552 13 20 12.552 20 12C20 11.448 19.552 11 19 11Z"
                    fill="white"
                  />
                </mask>
              </g>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectCard from "@/components/Cards/Project";
import PremiumCard from "@/components/Cards/Premium";
import Tags from "@/components/Tags";
export default {
  name: "Home",
  components: {
    ProjectCard,
    PremiumCard,
    Tags
  },
  data() {
    return {
      scrollIndex: 0,
      increaseValue: 0,
      scrollForTablet: 940,
      scrollForDesktop: 1300,
      imageCount: 4,
      windowWith: window.innerWidth,
      items: [
        {
          title:
            "Bazarda yeni software təmin edən şirkət olan Beasts-in yeni texnologiyalara qapı açacaq layihəsi lorem ipsum dolor sit amet",
          description:
            "we are startup company which need a lot of mobile lorem ipsum dolor sit amet daday diday day are startup company which need a lot of mobile lorem ipsum dolor sit amet daday diday day are startup company which need a lot of mobile lorem ipsum dolor sit amet daday diday day are startup company which need a lot of mobile lorem ipsum dolor sit amet daday diday day are startup company which need a lot of mobile lorem ipsum dolor sit amet daday diday day are startup company which need a lot of mobile lorem ipsum dolor sit amet daday diday day are startup company which need a lot of mobile lorem ipsum dolor sit amet daday diday day",
          viewCount: 331,
          date: "01-10-2020",
          category: "Biznes",
          createdBy: {
            name: "Məmməd Qurbanov",
            about: "CEO at his world"
          }
        },
        {
          title:
            "Bazarda yeni software təmin edən şirkət olan Beasts-in yeni texnologiyalara qapı açacaq layihəsi lorem ipsum dolor sit amet",
          description:
            "we are startup company which need a lot of mobile lorem ipsum dolor sit amet daday diday day are startup company which need a lot of mobile lorem ipsum dolor sit amet daday diday day are startup company which need a lot of mobile lorem ipsum dolor sit amet daday diday day are startup company which need a lot of mobile lorem ipsum dolor sit amet daday diday day are startup company which need a lot of mobile lorem ipsum dolor sit amet daday diday day are startup company which need a lot of mobile lorem ipsum dolor sit amet daday diday day are startup company which need a lot of mobile lorem ipsum dolor sit amet daday diday day",
          viewCount: 4787,
          date: "01-10-2020",
          category: "Biznes",
          createdBy: {
            name: "Məmməd Qurbanov",
            about: "CEO at his world"
          }
        },
        {
          title:
            "Bazarda yeni software təmin edən şirkət olan Beasts-in yeni texnologiyalara qapı açacaq layihəsi lorem ipsum dolor sit amet",
          description:
            "we are startup company which need a lot of mobile lorem ipsum dolor sit amet daday diday day are startup company which need a lot of mobile lorem ipsum dolor sit amet daday diday day are startup company which need a lot of mobile lorem ipsum dolor sit amet daday diday day are startup company which need a lot of mobile lorem ipsum dolor sit amet daday diday day are startup company which need a lot of mobile lorem ipsum dolor sit amet daday diday day are startup company which need a lot of mobile lorem ipsum dolor sit amet daday diday day are startup company which need a lot of mobile lorem ipsum dolor sit amet daday diday day",
          viewCount: 1208,
          date: "01-10-2020",
          category: "Biznes",
          createdBy: {
            name: "Məmməd Qurbanov",
            about: "CEO at his world"
          }
        },
        {
          title:
            "Bazarda yeni software təmin edən şirkət olan Beasts-in yeni texnologiyalara qapı açacaq layihəsi lorem ipsum dolor sit amet",
          description:
            "we are startup company which need a lot of mobile lorem ipsum dolor sit amet daday diday day are startup company which need a lot of mobile lorem ipsum dolor sit amet daday diday day are startup company which need a lot of mobile lorem ipsum dolor sit amet daday diday day are startup company which need a lot of mobile lorem ipsum dolor sit amet daday diday day are startup company which need a lot of mobile lorem ipsum dolor sit amet daday diday day are startup company which need a lot of mobile lorem ipsum dolor sit amet daday diday day are startup company which need a lot of mobile lorem ipsum dolor sit amet daday diday day",
          viewCount: 125,
          date: "01-10-2020",
          category: "Biznes",
          createdBy: {
            name: "Məmməd Qurbanov",
            about: "CEO at his world"
          }
        }
      ]
    };
  },
  methods: {
    scrollToLeft() {
      const premiumCardsContent = document.getElementById(
        "premiumCardsContent"
      );
      if (this.windowWith >= 992 && this.windowWith < 1440) {
        if (this.scrollIndex < 940) {
          this.scrollIndex = this.scrollForTablet * this.imageCount;
        }
        const increaseValue = this.scrollForTablet;
        this.scrollIndex = this.scrollIndex - increaseValue;
        premiumCardsContent.scroll(this.scrollIndex, 0);
        console.log("left", this.scrollIndex);
      } else if (this.windowWith >= 1440) {
        if (this.scrollIndex < 1300) {
          this.scrollIndex = this.scrollForDesktop * 4;
        }
        const increaseValue = this.scrollForDesktop;
        this.scrollIndex = this.scrollIndex - increaseValue;
        premiumCardsContent.scroll(this.scrollIndex, 0);
        console.log("left", this.scrollIndex);
      }
    },
    scrollToRight() {
      const premiumCardsContent = document.getElementById(
        "premiumCardsContent"
      );
      if (this.windowWith >= 992 && this.windowWith < 1440) {
        if (this.scrollIndex > this.scrollForTablet * (this.imageCount - 1)) {
          this.scrollIndex = 0;
        }
        const increaseValue = this.scrollForTablet;
        premiumCardsContent.scroll(this.scrollIndex, 0);
        this.scrollIndex = this.scrollIndex + increaseValue;
        console.log("right", this.scrollIndex);
      } else if (this.windowWith >= 1440) {
        if (this.scrollIndex > this.scrollForDesktop * (this.imageCount - 1)) {
          this.scrollIndex = 0;
        }
        const increaseValue = this.scrollForDesktop;
        premiumCardsContent.scroll(this.scrollIndex, 0);
        this.scrollIndex = this.scrollIndex + increaseValue;
        console.log("right", this.scrollIndex);
      }
    }
  }
};
</script>
