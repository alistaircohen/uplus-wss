<template>
  <div
    class="flex flex-col"
    v-if="settings.pega_marketing.Host === '' || loading"
  >
    <div class="wrap hero-wrap flex">
      <div class="flex flex-col">
         <div id="row">
            <div class="row1">
                <ul class="__links">
                    <li><a class="__link" href="">Selling of electrical equipment in Australia</a></li>
                    <li><a class="__link" href="">Steps for compliance with EESS</a></li>
                    <li><a class="__link" href="">Information and advisory notices</a></li>
                    <li><a class="__link" href="">About the EESS</a></li>
                    <li><a class="__link" href="">ACMA requirements</a></li>
                </ul>
            </div>
            <div class="row2">
                <ul class="__buttons">
                    <li><a class="__button" href="#RegistrationLoginModal">Responsible Supplier &amp; Equipment Registration Login</a></li>
                    <li><a class="__button" href="">Search Responsible Suppliers</a></li><li><a class="__button" href="">Search Registered Equipment</a></li>
                    <li><a class="__button" href="#EquipmentLoginModal">Equipment Certification Login</a></li>
                    <li><a class="__button" href="">Search Certification</a></li>
                </ul>
            </div>
        </div>
      </div>
    </div>
    <div class="wrap options primary-options">
      <section
        v-for="(item, index) in app.primarydetails"
        :key="index"
        class="front-option"
      >
        <div>
        </div>
        <div class="details">
          <h2 class="option-header">{{ $t('message.' + item.title) }}</h2>
          <p>{{ $t('message.' + item.message) }}</p>
          <a v-on:click="gotoOfferPage" href="./offer.html">{{
            $t('message.' + item.link)
          }}</a>
        </div>
      </section>
    </div>
  </div>
  <div class="flex flex-col" v-else>
    <div
      v-if="!isAuthenticated && homeHeroAction != 1 && offerURL === ''"
      class="wrap flex flex-col"
    >
      <button
        v-if="
          settings.pega_marketing.showAIOverlay &&
            (hero_offer.url !== '' || hero_offer.img !== '')
        "
        class="pi pi-polaris-solid ai-toggle"
        v-on:click="toggleAIOverlay(hero_offer)"
        title="toggle AI"
      ></button>
      <div
        class="flex hero-wrap"
        :class="hero_offer.img !== '' ? 'hero-with-img' : ''"
      >
        <div class="flex flex-col">
          <h1 class="hero">
            {{ hero_offer.title }}
            <br v-if="hero_offer.message != ''" />
            {{ hero_offer.message }}
          </h1>
          <a
            v-if="
              settings.pega_marketing.homePage.clickaction === 'TopURL' &&
                hero_offer.url !== ''
            "
            :href="hero_offer.url"
            >{{ hero_offer.link }}</a
          >
          <a
            v-else-if="
              settings.pega_marketing.homePage.clickaction === 'Popup' &&
                hero_offer.url !== ''
            "
            :href="hero_offer.url"
            target="_blank"
            >{{ hero_offer.link }}</a
          >
          <button v-else v-on:click="applyHeroAction" class="more">
            {{ hero_offer.link }}
          </button>
        </div>
        <div v-if="hero_offer.img !== ''">
          <img :src="hero_offer.img" :alt="hero_offer.title" />
        </div>
        <AIOverlay
          v-if="settings.pega_marketing.showAIOverlay"
          :offer="hero_offer"
          :class="hero_offer.showAIoverlay ? 'show' : ''"
        />
      </div>
    </div>
    <div class="wrap options primary-options">
      <section
        v-for="(item, index) in data"
        :key="index"
        class="front-option"
        @mouseover="checkRTSEventHover(index, item, true)"
        @mouseleave="checkRTSEventHover(index, item, false)"
      >
        <button
          v-if="settings.pega_marketing.showAIOverlay"
          class="pi pi-polaris-solid ai-toggle"
          v-on:click="toggleAIOverlay(item)"
          title="toggle AI"
        ></button>
        <div class="offer-card">
          <div>
            <img class="option" :src="item.img" :alt="item.title" />
          </div>
          <div class="details">
            <h2 class="option-header">{{ item.title }}</h2>
            <p>{{ item.message }}</p>
            <a
              v-if="
                settings.pega_marketing.homePage.clickaction === 'TopURL' &&
                  item.url != ''
              "
              :href="item.url"
              >{{ $t('message.' + item.link) }}</a
            >
            <a
              v-else-if="
                settings.pega_marketing.homePage.clickaction === 'Popup' &&
                  item.url != ''
              "
              :href="item.url"
              target="_blank"
              >{{ $t('message.' + item.link) }}</a
            >
            <button v-else class="simple" v-on:click="showOffer(item)">
              {{ $t('message.' + item.link) }}
            </button>
          </div>
          <AIOverlay
            v-if="settings.pega_marketing.showAIOverlay"
            :offer="item"
            :class="item.showAIoverlay ? 'show' : ''"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mainconfig, initNBAM, sendRTSEvent } from '../global';
import AIOverlay from './controls/AIOverlay.vue';

export default {
  data() {
    return {
      ...mainconfig,
      loading: true,
      data: [],
      RTSstate: {
        index: -1,
        id: 0,
      },
      hero_offer: {
        img: '',
        url: '',
        title: this.$t(`message.${mainconfig.app.herotext.title}`),
        message: this.$t(`message.${mainconfig.app.herotext.titlespan}`),
        link: this.$t(`message.${mainconfig.app.herotext.buttonlabel}`),
      },
    };
  },
  mounted() {
    if (
      this.settings.pega_marketing.Host !== '' &&
      this.settings.pega_marketing.homePage.placement !== '' &&
      this.settings.pega_marketing.homePage.containerName !== ''
    ) {
      const self = this;
      setTimeout(() => {
        initNBAM(
          self,
          'homePage',
          '',
          self.previousPage,
          mainconfig.isCategoryPage ? 'category.html' : 'index.html',
        );
      }, 200);
    }
  },
  methods: {
    checkRTSEventHover(index, item, state) {
      if (mainconfig.isRTSEnabled === true) {
        if (this.RTSstate.index === -1) {
          this.RTSstate.index = index;
          this.RTSstate.id = setTimeout(() => {
            this.generateRTSEvent(item);
          }, 3000);
        } else if (this.RTSstate.index === index && state === false) {
          clearTimeout(this.RTSstate.id);
          this.RTSstate.id = 0;
          this.RTSstate.index = -1;
        }
      }
    },
    generateRTSEvent(item) {
      const el = document.querySelector('.comment');
      const today = new Date();
      let month = today.getMonth() + 1;
      if (month < 10) {
        month = `0${month}`;
      }
      const date = `${today.getFullYear()}-${month}-${today.getDate()}`;
      const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
      el.innerHTML += `<p>${date} ${time} - Sending event - group:${item.category} - value:${item.name}</p`;
      el.scrollTop = el.scrollHeight;
      sendRTSEvent(this, item);
    },
    showOffer(item) {
      mainconfig.offerURL = item.url;
      mainconfig.previousPage = item.name;
    },
    applyHeroAction() {
      if (this.hero_offer.url === '') {
        mainconfig.homeHeroAction = 1;
        window.history.replaceState({}, '', 'heroaction');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        mainconfig.offerURL = this.hero_offer.url;
        mainconfig.previousPage = this.hero_offer.name;
      }
    },
    toggleAIOverlay(item) {
      item.showAIoverlay = !item.showAIoverlay;
    },
    gotoOfferPage(event) {
      mainconfig.currentPage = 'offer.html';
      if (this.$gtag) {
        this.$gtag.pageview({
          page_path: mainconfig.currentPage,
        });
      }
      window.history.replaceState({}, '', 'offer.html');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      event.preventDefault();
    },
  },
  components: {
    AIOverlay,
  },
};
</script>
