<template>
  <div class="home">
    <div class="filtering-tags">
      <span class="chip">#tələbə</span>
      <span class="chip chip-blue">#şagird</span>
      <span class="chip">#iş</span>
      <span class="chip">#yeni</span>
      <span class="chip">#müəllim</span>
      <span class="chip">#direktor</span>
    </div>
    <div class="premium">
      <div class="premium__head">
        <h1 class="heading-xl">Permium layihələr</h1>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Icon/Fill/star">
            <path
              id="Mask"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.5616 21.0007C17.4036 21.0007 17.2446 20.9637 17.0986 20.8877L11.9996 18.2237L6.90159 20.8877C6.56359 21.0627 6.15559 21.0327 5.84959 20.8087C5.54159 20.5847 5.38859 20.2057 5.45359 19.8307L6.42459 14.2027L2.30459 10.2177C2.03059 9.95265 1.93159 9.55465 2.04859 9.19065C2.16559 8.82865 2.47859 8.56365 2.85659 8.50965L8.55659 7.68165L11.1046 2.55565C11.4426 1.87565 12.5576 1.87565 12.8956 2.55565L15.4436 7.68165L21.1436 8.50965C21.5216 8.56365 21.8346 8.82865 21.9516 9.19065C22.0686 9.55465 21.9696 9.95265 21.6956 10.2177L17.5756 14.2027L18.5466 19.8307C18.6116 20.2057 18.4576 20.5847 18.1506 20.8087C17.9766 20.9367 17.7696 21.0007 17.5616 21.0007Z"
              fill="#FFEB37"
            />
            <mask
              id="mask0"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="2"
              y="2"
              width="20"
              height="20"
            >
              <path
                id="Mask_2"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.5616 21.0007C17.4036 21.0007 17.2446 20.9637 17.0986 20.8877L11.9996 18.2237L6.90159 20.8877C6.56359 21.0627 6.15559 21.0327 5.84959 20.8087C5.54159 20.5847 5.38859 20.2057 5.45359 19.8307L6.42459 14.2027L2.30459 10.2177C2.03059 9.95265 1.93159 9.55465 2.04859 9.19065C2.16559 8.82865 2.47859 8.56365 2.85659 8.50965L8.55659 7.68165L11.1046 2.55565C11.4426 1.87565 12.5576 1.87565 12.8956 2.55565L15.4436 7.68165L21.1436 8.50965C21.5216 8.56365 21.8346 8.82865 21.9516 9.19065C22.0686 9.55465 21.9696 9.95265 21.6956 10.2177L17.5756 14.2027L18.5466 19.8307C18.6116 20.2057 18.4576 20.5847 18.1506 20.8087C17.9766 20.9367 17.7696 21.0007 17.5616 21.0007Z"
                fill="white"
              />
            </mask>
          </g>
        </svg>
      </div>
      <div class="premium__content">
        <div class="column">
          <div class="premium-card">
            <div class="premium-card__image">
              <img src="../../assets/img/insomnia.png" alt="" />
            </div>

            <div class="premium-card__heading">
              <router-link to="/#" class="heading-l text-blue"
                >Innput stratup Lorem, ipsum dolor. sit asds
                jkhaskdh</router-link
              >
              <p class="text-m"><span class="heading-l">124</span> baxış</p>
            </div>
            <p class="premium-card__description text-m">
              we are startup company which need a lot of mobile Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Cupiditate eligendi
              pariatur quas!
            </p>
            <div class="premium-card__footer">
              <p class="heading-m">01-01-2021</p>
            </div>
          </div>
        </div>
        <div class="column" v-for="(a, i) in 6" :key="i">
          <PremiumCard></PremiumCard>
        </div>
        <button class="button-blue-outlined right-arrow">
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
    <div class="projects">
      <div class="projects__head">
        <h1 class="heading-xl">Layihələr</h1>
      </div>
      <div class="projects__content">
        <div class="column" v-for="(b, i) in 15" :key="i + 56">
          <ProjectCard></ProjectCard>
        </div>
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
</template>

<script>
import ProjectCard from "../../components/Cards/Project";
import PremiumCard from "../../components/Cards/Premium";
export default {
  name: "Home",
  components: {
    ProjectCard,
    PremiumCard
  }
};
</script>
