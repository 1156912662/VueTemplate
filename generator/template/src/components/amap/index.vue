<!--
 * @Author: yanjikun
 * @Date: 2021-03-23 16:20:38
 * @LastEditors: yanjikun
 * @LastEditTime: 2021-03-24 17:24:36
 * @Description: file content
-->
<template>
  <div class="amap-page-container">
    <a-input placeholder="请填写详细地址" :value="address" @change="handleChangeAddress">
      <a-icon type="environment" slot="addonAfter" style="cursor: pointer;" @click="handleGetAddress" />
    </a-input>
    <a-modal :visible.sync="visible" title="选择地址" width="50%" @ok="handleSaveAddress" @cancel="handleCancel">
      <el-amap
        vid="amap"
        class="amap-demo"
        :center="center"
        :zoom="zoom"
        :events="events"
        style="width:100%;height:500px"
      >
        <el-amap-marker ref="marker" vid="component-marker" :position="mapInfo.lnglat"></el-amap-marker
      ></el-amap>
      <a-input :value="mapInfo.address" style="margin-top:10px"></a-input>
    </a-modal>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {
    value: {
      type: String,
      default: '',
      require: false
    }
  },
  data() {
    return {
      zoom: 14, // 地图缩放
      center: [121.59996, 31.197646],
      mapInfo: {
        //初始值默认为天安门
        address: '北京市东城区东华门街道天安门',
        lng: 116.397451,
        lat: 39.909187,
        lnglat: [116.397451, 39.909187]
      },
      visible: false,
      events: {
        click: e => {
          console.log(e);
          this.mapInfo.lng = e.lnglat.lng;
          this.mapInfo.lat = e.lnglat.lat;
          this.mapInfo.lnglat = [e.lnglat.lng, e.lnglat.lat];
          this.getFormattedAddress();
        }
      },
      address: this.value || ''
    };
  },
  computed: {},
  watch: {
    value(val) {
      this.address = val;
    }
  },
  methods: {
    handleGetAddress() {
      this.visible = true;
    },
    handleChangeAddress(value) {
      this.address = value;
      this.$emit('change', this.address);
    },
    handleSaveAddress() {
      this.visible = false;
      this.handleChangeAddress(this.mapInfo.address);
    },
    handleCancel() {
      this.visible = false;
    },
    getFormattedAddress() {
      // eslint-disable-next-line no-undef
      AMap.plugin('AMap.Geocoder', () => {
        let GeocoderOptions = {
          city: '全国'
        };
        // eslint-disable-next-line no-undef
        let geocoder = new AMap.Geocoder(GeocoderOptions);
        geocoder.getAddress(this.mapInfo.lnglat, (status, result) => {
          console.log('通过经纬度拿到的地址', result);
          if (status === 'complete' && result.info === 'OK') {
            this.mapInfo.address = result.regeocode.formattedAddress;
          } else {
            this.mapInfo.address = '无法获取地址';
          }
        });
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
