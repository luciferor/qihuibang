<template style="height:100%;">
  <div class="office-box" style="height:100%;">
    <div class="office-title">
      <Breadcrumb class="left-header" separator="＞">
        <BreadcrumbItem to="/pages/office/officehome"><i class="officehome-icon"></i>办公应用</BreadcrumbItem>
          <BreadcrumbItem to="/pages/office/shenpi"><i class="shenpi-icon"></i>审批</BreadcrumbItem>
      </Breadcrumb>
      <div class="right-btns" >
        <button type="button" @click="toMyshenpi()"><i class="myshenpi-icon"></i>我的审批<span class="right-corner">{{pingshenNum}}</span></button>
      </div>
    </div>
    <div class="office-content">
              <div class="apps-wrap">
        <div class="type-header">
          <span>审批</span>
          <p class="toggle-btn" @click="toggleshow()"><span v-show="toggleshowstatus">隐藏全部(14)</span><span v-show="!toggleshowstatus">显示全部(14)</span><i
              class="showing" v-bind:class="{hiding:!toggleshowstatus}"></i></p>
        </div>
        <ul class="apps-list" v-show="toggleshowstatus">
          <li class="apps-item" v-for="item in shenpiArr" :key="item.key" @click="routerTo(item.href)">
            <img class="item-logo" :src="item.logosrc">
            <span class="item-name">{{item.name}}</span>
          </li>
        </ul>
      </div>

    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      rootUrl: window.localStorage.api,
      rootImg:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAYAAABxlTA0AAAEQElEQVR4nO2bYXOqOhCG34AVBBkH7P//gxWFqiFIJPfDnXCgx1rbcQn07POJdijJPA2bTTaIqqoMGDI81x347bBgYlgwMSyYGBZMDAsmhgUTw4KJYcHEsGBiWDAxLJgYFkwMCyaGBRPDgolhwcSwYGJYMDEsmBgWTMyCuoGmaSClRF3XaNsWxrgtYgsh4HkegiBAFEV4eXmhbY+ybC+lRFmWVI9/CpvNBlEUkT2fLEQ0TTN5uQBQliWapiF7PlmIkFJ210IIJEmC5XJJ1dzDGGNQVdWgf1JKbDYbkvbIBNd13V0nSYI4jqma+jbL5RJt20IpBWDY12dDFiKu12t3HQQBVTM/pv829fv6bEZJ04QQYzTzLTxvnAyV82BifpVg1zn2LcgXGpQYY3A+n6GU6lItIQSCIMBqtUIYho57OGPBdV2jKAq0bTv4vTEGSikopbBcLpGm6Wjx9hazDBGXywWHw+Evubfuy/PcaeiY3Qg2xuBwOHTShBCI4xhhGMLzPGitcT6fu9xWa42iKJCmqZP+zk7w6XTqRq4QAlmWDXJa3/cRBAGOxyNOpxMAdDGaemPnFrMLEXb1BQDr9frT5XeSJFgs/oyf/t+NyawEG2Ogte5+/ipLWK1W3TXlhs49ZiX446Tm+/7d+/vZg6uJblaCP6Zb/dF8i/4eg6tUbVaChRCDiaq/5fgRuy1pcTHBATMTDGBQfZBS3pRsjEFRFN0IFkIM4vGYzC5Ni6II5/O5Cw9lWUIpNciDpZSD8BDH8ZfxmorZCQaANE2R53k36dV1/emmeRiGSJJkzO4NmF2IAIDFYoHX19e7JSi7wnO1grPMcgQD/6do2+0WdV13KzVjTFeSX61WzsJCn9kKtgRBMMmSlGUSIWKKG+XPwtkIbtsWx+MRVVXBGIPFYoEkSSaxSf5MnIxgrTV2ux2klN3o1VrjcDjgeDy66BIZowvWWiPP809L5afTCUVRjNwrOkYNEU3TYL/ff1mJqKoKbdsiTdO7JX9bjzPGIAxDxHE8uSMCowmu63pQiXjk/v1+jyzL/pJmqxr9xUXTNKiqClmWTSI9s4wSIpRS35JrsTW1/oi/Xq/Y7XY3V25a64fekDEZRfD7+/uPU7GmabqYba/vbVPaGD8VybNYaGit8fb29vA/yY7k7XbrPCZPYqHxCN99A+yE6noRMxvBP+FyuTiX/KsFA38OqXBNjhB7zMoFZIJdTy4fUUoNJPdXkpR9JRPs8sDdZ1RVhbIs0bbtoJbXP6DybMieHATB3aqvK6SUUEoN8mTKHTyyYbZerycXJix9uZ7nzfM7Od/3kWXZJEOFRQhBfn6Y9EtPAF28U0pBa+088bef0trdN+qNIXLB/zrTfX9/CSyYGBZMDAsmhgUTw4KJYcHEsGBiWDAxLJgYFkwMCyaGBRPDgolhwcSwYGJYMDEsmBgWTAwLJoYFE/Mfuu8crG4Pn8IAAAAASUVORK5CYII=",
      showed: false, //显示状态
      comname: "", //公司名称
      shenpiArr: [
        {
          logosrc:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAETElEQVRoge2abWxTVRjHf70b62ArOmangG/DISKoQ8c2jUaZISETnS8kaqKJxkScGpMR/CIiUSEYJS7iByJgYjBR5AuG1+jGXkTB0cmCDGG6MRCqdmMOt5bZrev1w1m9t9rS7p6z3Gr2+9Jzzz3n9P/vPS/PfVJH2WadEe4HqoD5QDapjR/wAO8CuwC0kRurgR3AAlLfBAiNC4CdCO2kA4uBFTaKkmUF0KQBy+xWooAqDSiyW4UCijTAZbcKBbi0xG3+G4wbSTXGjaQa6aoHzJkId14DpVdBwWWQkwk60DsAHT3Q7IX6k3D+T7Xf6yjbrOuJmyXG5YTHb4EHbwRn2sXbBkOw4zhsaYELQyq+XZGRWW54/V5wZ42un7cPXquFU72yChQYme2GdeWQaZqkA0Nw8GcxjboDoDkgLxuKpkPp1dFPrD8IVbuhU9KMlJHcSbDxIbg006iraYdNHui5ELtPXjY8Vwx35xt13QFY+jn8IbFupHatl+6INvHBIXirMb4JgC4/vFkHH7cYde4seKFURomEkYJcsTtF2NMG244m11cHPjoMte1GXdl1cG2OVTUSRhYWGOX+IGz0JNfvqVth62MwYwpsaDJ2LQewaKZVNRJGbrrCKNe0CzOJeHY+PDlPnDXpmjhLvvzJuF84zaoaCSN5pq3Wc1Z8ZmXA07dBfowpUlkCj94MoTC8UQc/nhP1h38x2kyfbFWNhJFLTIvc2yc+C6fCE4VQfR/MzBV1DuD5UlgyV5hYVQvfnDb6dvmN8qQJVtVIGIk1lZrOwFenxCm/rhxucMOLt8Mjc2BwGFbWwLdnovsMDl98zGSxbCTyFACmjUyJUBhW10NjJ2RnwPrFImQJDosT/NDZf49zuSlnYx5ztFg2csxnlIuvNMrDI2bqOiBNE3HVyhpjHf2TeaYFfvQ3q2okjHxtmucLC8QTiBDWYW0jvHcAlu2B77yxx8jKgEXXxx5ztEg9kdPnRdnlhKXF0ffDuohwT3THH+OZIpjsFOX2Hmj1xW+bCMtGdOCTI8Z1+SyxMyXLkrlQMdu4/vRI/LbJIBVr7euAtnPGdWUJLL8LpkyM38flFG0qS4y6Vp/YIGSQDuPzc2BDBUwwheYDQ9DQKQ67X/sgPU0coIVT4Z4Z0edFKCwiX9l3EiUvVg/PsR69bvLA1u9lFShKPmw/Fn1aJ0uzFz5TYAIUGdGBd/aDz5+w6d/8PiDeXZQkDFCYDuoPioMwFE7cNqzD2gaRWVGF0rzWD12w/kDidh82R0e9KlCeoNvdBrtOxL/fcFLdujAzJpnG9w9CS4xf/Hg3vL1f3bowMyZGQmFYtU+EHRE6e+GVL0QQORaMWe43MAgv7xVPptUHy/dCn8T7RiKUpUzt5n+TjR83kmqMG0k1NKDfbhEK8GtAs90qFODRgGq7VSigWkP8VWiN3UokWAPsjCz2V4EKoB4I2CYpeQIIrQ8gtPMXTBlDUjZc+rYAAAAASUVORK5CYII=",
          name: "请假(可点击跳转)",
            href:'/pages/office/shenpiVacate'
          
        },
        {
          logosrc:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAETElEQVRoge2abWxTVRjHf70b62ArOmangG/DISKoQ8c2jUaZISETnS8kaqKJxkScGpMR/CIiUSEYJS7iByJgYjBR5AuG1+jGXkTB0cmCDGG6MRCqdmMOt5bZrev1w1m9t9rS7p6z3Gr2+9Jzzz3n9P/vPS/PfVJH2WadEe4HqoD5QDapjR/wAO8CuwC0kRurgR3AAlLfBAiNC4CdCO2kA4uBFTaKkmUF0KQBy+xWooAqDSiyW4UCijTAZbcKBbi0xG3+G4wbSTXGjaQa6aoHzJkId14DpVdBwWWQkwk60DsAHT3Q7IX6k3D+T7Xf6yjbrOuJmyXG5YTHb4EHbwRn2sXbBkOw4zhsaYELQyq+XZGRWW54/V5wZ42un7cPXquFU72yChQYme2GdeWQaZqkA0Nw8GcxjboDoDkgLxuKpkPp1dFPrD8IVbuhU9KMlJHcSbDxIbg006iraYdNHui5ELtPXjY8Vwx35xt13QFY+jn8IbFupHatl+6INvHBIXirMb4JgC4/vFkHH7cYde4seKFURomEkYJcsTtF2NMG244m11cHPjoMte1GXdl1cG2OVTUSRhYWGOX+IGz0JNfvqVth62MwYwpsaDJ2LQewaKZVNRJGbrrCKNe0CzOJeHY+PDlPnDXpmjhLvvzJuF84zaoaCSN5pq3Wc1Z8ZmXA07dBfowpUlkCj94MoTC8UQc/nhP1h38x2kyfbFWNhJFLTIvc2yc+C6fCE4VQfR/MzBV1DuD5UlgyV5hYVQvfnDb6dvmN8qQJVtVIGIk1lZrOwFenxCm/rhxucMOLt8Mjc2BwGFbWwLdnovsMDl98zGSxbCTyFACmjUyJUBhW10NjJ2RnwPrFImQJDosT/NDZf49zuSlnYx5ztFg2csxnlIuvNMrDI2bqOiBNE3HVyhpjHf2TeaYFfvQ3q2okjHxtmucLC8QTiBDWYW0jvHcAlu2B77yxx8jKgEXXxx5ztEg9kdPnRdnlhKXF0ffDuohwT3THH+OZIpjsFOX2Hmj1xW+bCMtGdOCTI8Z1+SyxMyXLkrlQMdu4/vRI/LbJIBVr7euAtnPGdWUJLL8LpkyM38flFG0qS4y6Vp/YIGSQDuPzc2BDBUwwheYDQ9DQKQ67X/sgPU0coIVT4Z4Z0edFKCwiX9l3EiUvVg/PsR69bvLA1u9lFShKPmw/Fn1aJ0uzFz5TYAIUGdGBd/aDz5+w6d/8PiDeXZQkDFCYDuoPioMwFE7cNqzD2gaRWVGF0rzWD12w/kDidh82R0e9KlCeoNvdBrtOxL/fcFLdujAzJpnG9w9CS4xf/Hg3vL1f3bowMyZGQmFYtU+EHRE6e+GVL0QQORaMWe43MAgv7xVPptUHy/dCn8T7RiKUpUzt5n+TjR83kmqMG0k1NKDfbhEK8GtAs90qFODRgGq7VSigWkP8VWiN3UokWAPsjCz2V4EKoB4I2CYpeQIIrQ8gtPMXTBlDUjZc+rYAAAAASUVORK5CYII=",
          name: "补卡(可点击跳转)",
            href:'/pages/office/shenpiBuka'
        },
        {
          logosrc:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAETElEQVRoge2abWxTVRjHf70b62ArOmangG/DISKoQ8c2jUaZISETnS8kaqKJxkScGpMR/CIiUSEYJS7iByJgYjBR5AuG1+jGXkTB0cmCDGG6MRCqdmMOt5bZrev1w1m9t9rS7p6z3Gr2+9Jzzz3n9P/vPS/PfVJH2WadEe4HqoD5QDapjR/wAO8CuwC0kRurgR3AAlLfBAiNC4CdCO2kA4uBFTaKkmUF0KQBy+xWooAqDSiyW4UCijTAZbcKBbi0xG3+G4wbSTXGjaQa6aoHzJkId14DpVdBwWWQkwk60DsAHT3Q7IX6k3D+T7Xf6yjbrOuJmyXG5YTHb4EHbwRn2sXbBkOw4zhsaYELQyq+XZGRWW54/V5wZ42un7cPXquFU72yChQYme2GdeWQaZqkA0Nw8GcxjboDoDkgLxuKpkPp1dFPrD8IVbuhU9KMlJHcSbDxIbg006iraYdNHui5ELtPXjY8Vwx35xt13QFY+jn8IbFupHatl+6INvHBIXirMb4JgC4/vFkHH7cYde4seKFURomEkYJcsTtF2NMG244m11cHPjoMte1GXdl1cG2OVTUSRhYWGOX+IGz0JNfvqVth62MwYwpsaDJ2LQewaKZVNRJGbrrCKNe0CzOJeHY+PDlPnDXpmjhLvvzJuF84zaoaCSN5pq3Wc1Z8ZmXA07dBfowpUlkCj94MoTC8UQc/nhP1h38x2kyfbFWNhJFLTIvc2yc+C6fCE4VQfR/MzBV1DuD5UlgyV5hYVQvfnDb6dvmN8qQJVtVIGIk1lZrOwFenxCm/rhxucMOLt8Mjc2BwGFbWwLdnovsMDl98zGSxbCTyFACmjUyJUBhW10NjJ2RnwPrFImQJDosT/NDZf49zuSlnYx5ztFg2csxnlIuvNMrDI2bqOiBNE3HVyhpjHf2TeaYFfvQ3q2okjHxtmucLC8QTiBDWYW0jvHcAlu2B77yxx8jKgEXXxx5ztEg9kdPnRdnlhKXF0ffDuohwT3THH+OZIpjsFOX2Hmj1xW+bCMtGdOCTI8Z1+SyxMyXLkrlQMdu4/vRI/LbJIBVr7euAtnPGdWUJLL8LpkyM38flFG0qS4y6Vp/YIGSQDuPzc2BDBUwwheYDQ9DQKQ67X/sgPU0coIVT4Z4Z0edFKCwiX9l3EiUvVg/PsR69bvLA1u9lFShKPmw/Fn1aJ0uzFz5TYAIUGdGBd/aDz5+w6d/8PiDeXZQkDFCYDuoPioMwFE7cNqzD2gaRWVGF0rzWD12w/kDidh82R0e9KlCeoNvdBrtOxL/fcFLdujAzJpnG9w9CS4xf/Hg3vL1f3bowMyZGQmFYtU+EHRE6e+GVL0QQORaMWe43MAgv7xVPptUHy/dCn8T7RiKUpUzt5n+TjR83kmqMG0k1NKDfbhEK8GtAs90qFODRgGq7VSigWkP8VWiN3UokWAPsjCz2V4EKoB4I2CYpeQIIrQ8gtPMXTBlDUjZc+rYAAAAASUVORK5CYII=",
          name: "请假"
        },
        {
          logosrc:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAETElEQVRoge2abWxTVRjHf70b62ArOmangG/DISKoQ8c2jUaZISETnS8kaqKJxkScGpMR/CIiUSEYJS7iByJgYjBR5AuG1+jGXkTB0cmCDGG6MRCqdmMOt5bZrev1w1m9t9rS7p6z3Gr2+9Jzzz3n9P/vPS/PfVJH2WadEe4HqoD5QDapjR/wAO8CuwC0kRurgR3AAlLfBAiNC4CdCO2kA4uBFTaKkmUF0KQBy+xWooAqDSiyW4UCijTAZbcKBbi0xG3+G4wbSTXGjaQa6aoHzJkId14DpVdBwWWQkwk60DsAHT3Q7IX6k3D+T7Xf6yjbrOuJmyXG5YTHb4EHbwRn2sXbBkOw4zhsaYELQyq+XZGRWW54/V5wZ42un7cPXquFU72yChQYme2GdeWQaZqkA0Nw8GcxjboDoDkgLxuKpkPp1dFPrD8IVbuhU9KMlJHcSbDxIbg006iraYdNHui5ELtPXjY8Vwx35xt13QFY+jn8IbFupHatl+6INvHBIXirMb4JgC4/vFkHH7cYde4seKFURomEkYJcsTtF2NMG244m11cHPjoMte1GXdl1cG2OVTUSRhYWGOX+IGz0JNfvqVth62MwYwpsaDJ2LQewaKZVNRJGbrrCKNe0CzOJeHY+PDlPnDXpmjhLvvzJuF84zaoaCSN5pq3Wc1Z8ZmXA07dBfowpUlkCj94MoTC8UQc/nhP1h38x2kyfbFWNhJFLTIvc2yc+C6fCE4VQfR/MzBV1DuD5UlgyV5hYVQvfnDb6dvmN8qQJVtVIGIk1lZrOwFenxCm/rhxucMOLt8Mjc2BwGFbWwLdnovsMDl98zGSxbCTyFACmjUyJUBhW10NjJ2RnwPrFImQJDosT/NDZf49zuSlnYx5ztFg2csxnlIuvNMrDI2bqOiBNE3HVyhpjHf2TeaYFfvQ3q2okjHxtmucLC8QTiBDWYW0jvHcAlu2B77yxx8jKgEXXxx5ztEg9kdPnRdnlhKXF0ffDuohwT3THH+OZIpjsFOX2Hmj1xW+bCMtGdOCTI8Z1+SyxMyXLkrlQMdu4/vRI/LbJIBVr7euAtnPGdWUJLL8LpkyM38flFG0qS4y6Vp/YIGSQDuPzc2BDBUwwheYDQ9DQKQ67X/sgPU0coIVT4Z4Z0edFKCwiX9l3EiUvVg/PsR69bvLA1u9lFShKPmw/Fn1aJ0uzFz5TYAIUGdGBd/aDz5+w6d/8PiDeXZQkDFCYDuoPioMwFE7cNqzD2gaRWVGF0rzWD12w/kDidh82R0e9KlCeoNvdBrtOxL/fcFLdujAzJpnG9w9CS4xf/Hg3vL1f3bowMyZGQmFYtU+EHRE6e+GVL0QQORaMWe43MAgv7xVPptUHy/dCn8T7RiKUpUzt5n+TjR83kmqMG0k1NKDfbhEK8GtAs90qFODRgGq7VSigWkP8VWiN3UokWAPsjCz2V4EKoB4I2CYpeQIIrQ8gtPMXTBlDUjZc+rYAAAAASUVORK5CYII=",
          name: "请假"
        },
        {
          logosrc:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAETElEQVRoge2abWxTVRjHf70b62ArOmangG/DISKoQ8c2jUaZISETnS8kaqKJxkScGpMR/CIiUSEYJS7iByJgYjBR5AuG1+jGXkTB0cmCDGG6MRCqdmMOt5bZrev1w1m9t9rS7p6z3Gr2+9Jzzz3n9P/vPS/PfVJH2WadEe4HqoD5QDapjR/wAO8CuwC0kRurgR3AAlLfBAiNC4CdCO2kA4uBFTaKkmUF0KQBy+xWooAqDSiyW4UCijTAZbcKBbi0xG3+G4wbSTXGjaQa6aoHzJkId14DpVdBwWWQkwk60DsAHT3Q7IX6k3D+T7Xf6yjbrOuJmyXG5YTHb4EHbwRn2sXbBkOw4zhsaYELQyq+XZGRWW54/V5wZ42un7cPXquFU72yChQYme2GdeWQaZqkA0Nw8GcxjboDoDkgLxuKpkPp1dFPrD8IVbuhU9KMlJHcSbDxIbg006iraYdNHui5ELtPXjY8Vwx35xt13QFY+jn8IbFupHatl+6INvHBIXirMb4JgC4/vFkHH7cYde4seKFURomEkYJcsTtF2NMG244m11cHPjoMte1GXdl1cG2OVTUSRhYWGOX+IGz0JNfvqVth62MwYwpsaDJ2LQewaKZVNRJGbrrCKNe0CzOJeHY+PDlPnDXpmjhLvvzJuF84zaoaCSN5pq3Wc1Z8ZmXA07dBfowpUlkCj94MoTC8UQc/nhP1h38x2kyfbFWNhJFLTIvc2yc+C6fCE4VQfR/MzBV1DuD5UlgyV5hYVQvfnDb6dvmN8qQJVtVIGIk1lZrOwFenxCm/rhxucMOLt8Mjc2BwGFbWwLdnovsMDl98zGSxbCTyFACmjUyJUBhW10NjJ2RnwPrFImQJDosT/NDZf49zuSlnYx5ztFg2csxnlIuvNMrDI2bqOiBNE3HVyhpjHf2TeaYFfvQ3q2okjHxtmucLC8QTiBDWYW0jvHcAlu2B77yxx8jKgEXXxx5ztEg9kdPnRdnlhKXF0ffDuohwT3THH+OZIpjsFOX2Hmj1xW+bCMtGdOCTI8Z1+SyxMyXLkrlQMdu4/vRI/LbJIBVr7euAtnPGdWUJLL8LpkyM38flFG0qS4y6Vp/YIGSQDuPzc2BDBUwwheYDQ9DQKQ67X/sgPU0coIVT4Z4Z0edFKCwiX9l3EiUvVg/PsR69bvLA1u9lFShKPmw/Fn1aJ0uzFz5TYAIUGdGBd/aDz5+w6d/8PiDeXZQkDFCYDuoPioMwFE7cNqzD2gaRWVGF0rzWD12w/kDidh82R0e9KlCeoNvdBrtOxL/fcFLdujAzJpnG9w9CS4xf/Hg3vL1f3bowMyZGQmFYtU+EHRE6e+GVL0QQORaMWe43MAgv7xVPptUHy/dCn8T7RiKUpUzt5n+TjR83kmqMG0k1NKDfbhEK8GtAs90qFODRgGq7VSigWkP8VWiN3UokWAPsjCz2V4EKoB4I2CYpeQIIrQ8gtPMXTBlDUjZc+rYAAAAASUVORK5CYII=",
          name: "外出(可点击跳转)",
          href:'/pages/office/shenpiGoout'

        },
        {
          logosrc:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAETElEQVRoge2abWxTVRjHf70b62ArOmangG/DISKoQ8c2jUaZISETnS8kaqKJxkScGpMR/CIiUSEYJS7iByJgYjBR5AuG1+jGXkTB0cmCDGG6MRCqdmMOt5bZrev1w1m9t9rS7p6z3Gr2+9Jzzz3n9P/vPS/PfVJH2WadEe4HqoD5QDapjR/wAO8CuwC0kRurgR3AAlLfBAiNC4CdCO2kA4uBFTaKkmUF0KQBy+xWooAqDSiyW4UCijTAZbcKBbi0xG3+G4wbSTXGjaQa6aoHzJkId14DpVdBwWWQkwk60DsAHT3Q7IX6k3D+T7Xf6yjbrOuJmyXG5YTHb4EHbwRn2sXbBkOw4zhsaYELQyq+XZGRWW54/V5wZ42un7cPXquFU72yChQYme2GdeWQaZqkA0Nw8GcxjboDoDkgLxuKpkPp1dFPrD8IVbuhU9KMlJHcSbDxIbg006iraYdNHui5ELtPXjY8Vwx35xt13QFY+jn8IbFupHatl+6INvHBIXirMb4JgC4/vFkHH7cYde4seKFURomEkYJcsTtF2NMG244m11cHPjoMte1GXdl1cG2OVTUSRhYWGOX+IGz0JNfvqVth62MwYwpsaDJ2LQewaKZVNRJGbrrCKNe0CzOJeHY+PDlPnDXpmjhLvvzJuF84zaoaCSN5pq3Wc1Z8ZmXA07dBfowpUlkCj94MoTC8UQc/nhP1h38x2kyfbFWNhJFLTIvc2yc+C6fCE4VQfR/MzBV1DuD5UlgyV5hYVQvfnDb6dvmN8qQJVtVIGIk1lZrOwFenxCm/rhxucMOLt8Mjc2BwGFbWwLdnovsMDl98zGSxbCTyFACmjUyJUBhW10NjJ2RnwPrFImQJDosT/NDZf49zuSlnYx5ztFg2csxnlIuvNMrDI2bqOiBNE3HVyhpjHf2TeaYFfvQ3q2okjHxtmucLC8QTiBDWYW0jvHcAlu2B77yxx8jKgEXXxx5ztEg9kdPnRdnlhKXF0ffDuohwT3THH+OZIpjsFOX2Hmj1xW+bCMtGdOCTI8Z1+SyxMyXLkrlQMdu4/vRI/LbJIBVr7euAtnPGdWUJLL8LpkyM38flFG0qS4y6Vp/YIGSQDuPzc2BDBUwwheYDQ9DQKQ67X/sgPU0coIVT4Z4Z0edFKCwiX9l3EiUvVg/PsR69bvLA1u9lFShKPmw/Fn1aJ0uzFz5TYAIUGdGBd/aDz5+w6d/8PiDeXZQkDFCYDuoPioMwFE7cNqzD2gaRWVGF0rzWD12w/kDidh82R0e9KlCeoNvdBrtOxL/fcFLdujAzJpnG9w9CS4xf/Hg3vL1f3bowMyZGQmFYtU+EHRE6e+GVL0QQORaMWe43MAgv7xVPptUHy/dCn8T7RiKUpUzt5n+TjR83kmqMG0k1NKDfbhEK8GtAs90qFODRgGq7VSigWkP8VWiN3UokWAPsjCz2V4EKoB4I2CYpeQIIrQ8gtPMXTBlDUjZc+rYAAAAASUVORK5CYII=",
          name: "请假"
        },
        {
          logosrc:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAETElEQVRoge2abWxTVRjHf70b62ArOmangG/DISKoQ8c2jUaZISETnS8kaqKJxkScGpMR/CIiUSEYJS7iByJgYjBR5AuG1+jGXkTB0cmCDGG6MRCqdmMOt5bZrev1w1m9t9rS7p6z3Gr2+9Jzzz3n9P/vPS/PfVJH2WadEe4HqoD5QDapjR/wAO8CuwC0kRurgR3AAlLfBAiNC4CdCO2kA4uBFTaKkmUF0KQBy+xWooAqDSiyW4UCijTAZbcKBbi0xG3+G4wbSTXGjaQa6aoHzJkId14DpVdBwWWQkwk60DsAHT3Q7IX6k3D+T7Xf6yjbrOuJmyXG5YTHb4EHbwRn2sXbBkOw4zhsaYELQyq+XZGRWW54/V5wZ42un7cPXquFU72yChQYme2GdeWQaZqkA0Nw8GcxjboDoDkgLxuKpkPp1dFPrD8IVbuhU9KMlJHcSbDxIbg006iraYdNHui5ELtPXjY8Vwx35xt13QFY+jn8IbFupHatl+6INvHBIXirMb4JgC4/vFkHH7cYde4seKFURomEkYJcsTtF2NMG244m11cHPjoMte1GXdl1cG2OVTUSRhYWGOX+IGz0JNfvqVth62MwYwpsaDJ2LQewaKZVNRJGbrrCKNe0CzOJeHY+PDlPnDXpmjhLvvzJuF84zaoaCSN5pq3Wc1Z8ZmXA07dBfowpUlkCj94MoTC8UQc/nhP1h38x2kyfbFWNhJFLTIvc2yc+C6fCE4VQfR/MzBV1DuD5UlgyV5hYVQvfnDb6dvmN8qQJVtVIGIk1lZrOwFenxCm/rhxucMOLt8Mjc2BwGFbWwLdnovsMDl98zGSxbCTyFACmjUyJUBhW10NjJ2RnwPrFImQJDosT/NDZf49zuSlnYx5ztFg2csxnlIuvNMrDI2bqOiBNE3HVyhpjHf2TeaYFfvQ3q2okjHxtmucLC8QTiBDWYW0jvHcAlu2B77yxx8jKgEXXxx5ztEg9kdPnRdnlhKXF0ffDuohwT3THH+OZIpjsFOX2Hmj1xW+bCMtGdOCTI8Z1+SyxMyXLkrlQMdu4/vRI/LbJIBVr7euAtnPGdWUJLL8LpkyM38flFG0qS4y6Vp/YIGSQDuPzc2BDBUwwheYDQ9DQKQ67X/sgPU0coIVT4Z4Z0edFKCwiX9l3EiUvVg/PsR69bvLA1u9lFShKPmw/Fn1aJ0uzFz5TYAIUGdGBd/aDz5+w6d/8PiDeXZQkDFCYDuoPioMwFE7cNqzD2gaRWVGF0rzWD12w/kDidh82R0e9KlCeoNvdBrtOxL/fcFLdujAzJpnG9w9CS4xf/Hg3vL1f3bowMyZGQmFYtU+EHRE6e+GVL0QQORaMWe43MAgv7xVPptUHy/dCn8T7RiKUpUzt5n+TjR83kmqMG0k1NKDfbhEK8GtAs90qFODRgGq7VSigWkP8VWiN3UokWAPsjCz2V4EKoB4I2CYpeQIIrQ8gtPMXTBlDUjZc+rYAAAAASUVORK5CYII=",
          name: "请假"
        },
        {
          logosrc:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAETElEQVRoge2abWxTVRjHf70b62ArOmangG/DISKoQ8c2jUaZISETnS8kaqKJxkScGpMR/CIiUSEYJS7iByJgYjBR5AuG1+jGXkTB0cmCDGG6MRCqdmMOt5bZrev1w1m9t9rS7p6z3Gr2+9Jzzz3n9P/vPS/PfVJH2WadEe4HqoD5QDapjR/wAO8CuwC0kRurgR3AAlLfBAiNC4CdCO2kA4uBFTaKkmUF0KQBy+xWooAqDSiyW4UCijTAZbcKBbi0xG3+G4wbSTXGjaQa6aoHzJkId14DpVdBwWWQkwk60DsAHT3Q7IX6k3D+T7Xf6yjbrOuJmyXG5YTHb4EHbwRn2sXbBkOw4zhsaYELQyq+XZGRWW54/V5wZ42un7cPXquFU72yChQYme2GdeWQaZqkA0Nw8GcxjboDoDkgLxuKpkPp1dFPrD8IVbuhU9KMlJHcSbDxIbg006iraYdNHui5ELtPXjY8Vwx35xt13QFY+jn8IbFupHatl+6INvHBIXirMb4JgC4/vFkHH7cYde4seKFURomEkYJcsTtF2NMG244m11cHPjoMte1GXdl1cG2OVTUSRhYWGOX+IGz0JNfvqVth62MwYwpsaDJ2LQewaKZVNRJGbrrCKNe0CzOJeHY+PDlPnDXpmjhLvvzJuF84zaoaCSN5pq3Wc1Z8ZmXA07dBfowpUlkCj94MoTC8UQc/nhP1h38x2kyfbFWNhJFLTIvc2yc+C6fCE4VQfR/MzBV1DuD5UlgyV5hYVQvfnDb6dvmN8qQJVtVIGIk1lZrOwFenxCm/rhxucMOLt8Mjc2BwGFbWwLdnovsMDl98zGSxbCTyFACmjUyJUBhW10NjJ2RnwPrFImQJDosT/NDZf49zuSlnYx5ztFg2csxnlIuvNMrDI2bqOiBNE3HVyhpjHf2TeaYFfvQ3q2okjHxtmucLC8QTiBDWYW0jvHcAlu2B77yxx8jKgEXXxx5ztEg9kdPnRdnlhKXF0ffDuohwT3THH+OZIpjsFOX2Hmj1xW+bCMtGdOCTI8Z1+SyxMyXLkrlQMdu4/vRI/LbJIBVr7euAtnPGdWUJLL8LpkyM38flFG0qS4y6Vp/YIGSQDuPzc2BDBUwwheYDQ9DQKQ67X/sgPU0coIVT4Z4Z0edFKCwiX9l3EiUvVg/PsR69bvLA1u9lFShKPmw/Fn1aJ0uzFz5TYAIUGdGBd/aDz5+w6d/8PiDeXZQkDFCYDuoPioMwFE7cNqzD2gaRWVGF0rzWD12w/kDidh82R0e9KlCeoNvdBrtOxL/fcFLdujAzJpnG9w9CS4xf/Hg3vL1f3bowMyZGQmFYtU+EHRE6e+GVL0QQORaMWe43MAgv7xVPptUHy/dCn8T7RiKUpUzt5n+TjR83kmqMG0k1NKDfbhEK8GtAs90qFODRgGq7VSigWkP8VWiN3UokWAPsjCz2V4EKoB4I2CYpeQIIrQ8gtPMXTBlDUjZc+rYAAAAASUVORK5CYII=",
          name: "请假"
        },
        {
          logosrc:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAETElEQVRoge2abWxTVRjHf70b62ArOmangG/DISKoQ8c2jUaZISETnS8kaqKJxkScGpMR/CIiUSEYJS7iByJgYjBR5AuG1+jGXkTB0cmCDGG6MRCqdmMOt5bZrev1w1m9t9rS7p6z3Gr2+9Jzzz3n9P/vPS/PfVJH2WadEe4HqoD5QDapjR/wAO8CuwC0kRurgR3AAlLfBAiNC4CdCO2kA4uBFTaKkmUF0KQBy+xWooAqDSiyW4UCijTAZbcKBbi0xG3+G4wbSTXGjaQa6aoHzJkId14DpVdBwWWQkwk60DsAHT3Q7IX6k3D+T7Xf6yjbrOuJmyXG5YTHb4EHbwRn2sXbBkOw4zhsaYELQyq+XZGRWW54/V5wZ42un7cPXquFU72yChQYme2GdeWQaZqkA0Nw8GcxjboDoDkgLxuKpkPp1dFPrD8IVbuhU9KMlJHcSbDxIbg006iraYdNHui5ELtPXjY8Vwx35xt13QFY+jn8IbFupHatl+6INvHBIXirMb4JgC4/vFkHH7cYde4seKFURomEkYJcsTtF2NMG244m11cHPjoMte1GXdl1cG2OVTUSRhYWGOX+IGz0JNfvqVth62MwYwpsaDJ2LQewaKZVNRJGbrrCKNe0CzOJeHY+PDlPnDXpmjhLvvzJuF84zaoaCSN5pq3Wc1Z8ZmXA07dBfowpUlkCj94MoTC8UQc/nhP1h38x2kyfbFWNhJFLTIvc2yc+C6fCE4VQfR/MzBV1DuD5UlgyV5hYVQvfnDb6dvmN8qQJVtVIGIk1lZrOwFenxCm/rhxucMOLt8Mjc2BwGFbWwLdnovsMDl98zGSxbCTyFACmjUyJUBhW10NjJ2RnwPrFImQJDosT/NDZf49zuSlnYx5ztFg2csxnlIuvNMrDI2bqOiBNE3HVyhpjHf2TeaYFfvQ3q2okjHxtmucLC8QTiBDWYW0jvHcAlu2B77yxx8jKgEXXxx5ztEg9kdPnRdnlhKXF0ffDuohwT3THH+OZIpjsFOX2Hmj1xW+bCMtGdOCTI8Z1+SyxMyXLkrlQMdu4/vRI/LbJIBVr7euAtnPGdWUJLL8LpkyM38flFG0qS4y6Vp/YIGSQDuPzc2BDBUwwheYDQ9DQKQ67X/sgPU0coIVT4Z4Z0edFKCwiX9l3EiUvVg/PsR69bvLA1u9lFShKPmw/Fn1aJ0uzFz5TYAIUGdGBd/aDz5+w6d/8PiDeXZQkDFCYDuoPioMwFE7cNqzD2gaRWVGF0rzWD12w/kDidh82R0e9KlCeoNvdBrtOxL/fcFLdujAzJpnG9w9CS4xf/Hg3vL1f3bowMyZGQmFYtU+EHRE6e+GVL0QQORaMWe43MAgv7xVPptUHy/dCn8T7RiKUpUzt5n+TjR83kmqMG0k1NKDfbhEK8GtAs90qFODRgGq7VSigWkP8VWiN3UokWAPsjCz2V4EKoB4I2CYpeQIIrQ8gtPMXTBlDUjZc+rYAAAAASUVORK5CYII=",
          name: "请假"
        },
        {
          logosrc:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAETElEQVRoge2abWxTVRjHf70b62ArOmangG/DISKoQ8c2jUaZISETnS8kaqKJxkScGpMR/CIiUSEYJS7iByJgYjBR5AuG1+jGXkTB0cmCDGG6MRCqdmMOt5bZrev1w1m9t9rS7p6z3Gr2+9Jzzz3n9P/vPS/PfVJH2WadEe4HqoD5QDapjR/wAO8CuwC0kRurgR3AAlLfBAiNC4CdCO2kA4uBFTaKkmUF0KQBy+xWooAqDSiyW4UCijTAZbcKBbi0xG3+G4wbSTXGjaQa6aoHzJkId14DpVdBwWWQkwk60DsAHT3Q7IX6k3D+T7Xf6yjbrOuJmyXG5YTHb4EHbwRn2sXbBkOw4zhsaYELQyq+XZGRWW54/V5wZ42un7cPXquFU72yChQYme2GdeWQaZqkA0Nw8GcxjboDoDkgLxuKpkPp1dFPrD8IVbuhU9KMlJHcSbDxIbg006iraYdNHui5ELtPXjY8Vwx35xt13QFY+jn8IbFupHatl+6INvHBIXirMb4JgC4/vFkHH7cYde4seKFURomEkYJcsTtF2NMG244m11cHPjoMte1GXdl1cG2OVTUSRhYWGOX+IGz0JNfvqVth62MwYwpsaDJ2LQewaKZVNRJGbrrCKNe0CzOJeHY+PDlPnDXpmjhLvvzJuF84zaoaCSN5pq3Wc1Z8ZmXA07dBfowpUlkCj94MoTC8UQc/nhP1h38x2kyfbFWNhJFLTIvc2yc+C6fCE4VQfR/MzBV1DuD5UlgyV5hYVQvfnDb6dvmN8qQJVtVIGIk1lZrOwFenxCm/rhxucMOLt8Mjc2BwGFbWwLdnovsMDl98zGSxbCTyFACmjUyJUBhW10NjJ2RnwPrFImQJDosT/NDZf49zuSlnYx5ztFg2csxnlIuvNMrDI2bqOiBNE3HVyhpjHf2TeaYFfvQ3q2okjHxtmucLC8QTiBDWYW0jvHcAlu2B77yxx8jKgEXXxx5ztEg9kdPnRdnlhKXF0ffDuohwT3THH+OZIpjsFOX2Hmj1xW+bCMtGdOCTI8Z1+SyxMyXLkrlQMdu4/vRI/LbJIBVr7euAtnPGdWUJLL8LpkyM38flFG0qS4y6Vp/YIGSQDuPzc2BDBUwwheYDQ9DQKQ67X/sgPU0coIVT4Z4Z0edFKCwiX9l3EiUvVg/PsR69bvLA1u9lFShKPmw/Fn1aJ0uzFz5TYAIUGdGBd/aDz5+w6d/8PiDeXZQkDFCYDuoPioMwFE7cNqzD2gaRWVGF0rzWD12w/kDidh82R0e9KlCeoNvdBrtOxL/fcFLdujAzJpnG9w9CS4xf/Hg3vL1f3bowMyZGQmFYtU+EHRE6e+GVL0QQORaMWe43MAgv7xVPptUHy/dCn8T7RiKUpUzt5n+TjR83kmqMG0k1NKDfbhEK8GtAs90qFODRgGq7VSigWkP8VWiN3UokWAPsjCz2V4EKoB4I2CYpeQIIrQ8gtPMXTBlDUjZc+rYAAAAASUVORK5CYII=",
          name: "请假"
        },
        {
          logosrc:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAETElEQVRoge2abWxTVRjHf70b62ArOmangG/DISKoQ8c2jUaZISETnS8kaqKJxkScGpMR/CIiUSEYJS7iByJgYjBR5AuG1+jGXkTB0cmCDGG6MRCqdmMOt5bZrev1w1m9t9rS7p6z3Gr2+9Jzzz3n9P/vPS/PfVJH2WadEe4HqoD5QDapjR/wAO8CuwC0kRurgR3AAlLfBAiNC4CdCO2kA4uBFTaKkmUF0KQBy+xWooAqDSiyW4UCijTAZbcKBbi0xG3+G4wbSTXGjaQa6aoHzJkId14DpVdBwWWQkwk60DsAHT3Q7IX6k3D+T7Xf6yjbrOuJmyXG5YTHb4EHbwRn2sXbBkOw4zhsaYELQyq+XZGRWW54/V5wZ42un7cPXquFU72yChQYme2GdeWQaZqkA0Nw8GcxjboDoDkgLxuKpkPp1dFPrD8IVbuhU9KMlJHcSbDxIbg006iraYdNHui5ELtPXjY8Vwx35xt13QFY+jn8IbFupHatl+6INvHBIXirMb4JgC4/vFkHH7cYde4seKFURomEkYJcsTtF2NMG244m11cHPjoMte1GXdl1cG2OVTUSRhYWGOX+IGz0JNfvqVth62MwYwpsaDJ2LQewaKZVNRJGbrrCKNe0CzOJeHY+PDlPnDXpmjhLvvzJuF84zaoaCSN5pq3Wc1Z8ZmXA07dBfowpUlkCj94MoTC8UQc/nhP1h38x2kyfbFWNhJFLTIvc2yc+C6fCE4VQfR/MzBV1DuD5UlgyV5hYVQvfnDb6dvmN8qQJVtVIGIk1lZrOwFenxCm/rhxucMOLt8Mjc2BwGFbWwLdnovsMDl98zGSxbCTyFACmjUyJUBhW10NjJ2RnwPrFImQJDosT/NDZf49zuSlnYx5ztFg2csxnlIuvNMrDI2bqOiBNE3HVyhpjHf2TeaYFfvQ3q2okjHxtmucLC8QTiBDWYW0jvHcAlu2B77yxx8jKgEXXxx5ztEg9kdPnRdnlhKXF0ffDuohwT3THH+OZIpjsFOX2Hmj1xW+bCMtGdOCTI8Z1+SyxMyXLkrlQMdu4/vRI/LbJIBVr7euAtnPGdWUJLL8LpkyM38flFG0qS4y6Vp/YIGSQDuPzc2BDBUwwheYDQ9DQKQ67X/sgPU0coIVT4Z4Z0edFKCwiX9l3EiUvVg/PsR69bvLA1u9lFShKPmw/Fn1aJ0uzFz5TYAIUGdGBd/aDz5+w6d/8PiDeXZQkDFCYDuoPioMwFE7cNqzD2gaRWVGF0rzWD12w/kDidh82R0e9KlCeoNvdBrtOxL/fcFLdujAzJpnG9w9CS4xf/Hg3vL1f3bowMyZGQmFYtU+EHRE6e+GVL0QQORaMWe43MAgv7xVPptUHy/dCn8T7RiKUpUzt5n+TjR83kmqMG0k1NKDfbhEK8GtAs90qFODRgGq7VSigWkP8VWiN3UokWAPsjCz2V4EKoB4I2CYpeQIIrQ8gtPMXTBlDUjZc+rYAAAAASUVORK5CYII=",
          name: "请假"
        },
        {
          logosrc:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAETElEQVRoge2abWxTVRjHf70b62ArOmangG/DISKoQ8c2jUaZISETnS8kaqKJxkScGpMR/CIiUSEYJS7iByJgYjBR5AuG1+jGXkTB0cmCDGG6MRCqdmMOt5bZrev1w1m9t9rS7p6z3Gr2+9Jzzz3n9P/vPS/PfVJH2WadEe4HqoD5QDapjR/wAO8CuwC0kRurgR3AAlLfBAiNC4CdCO2kA4uBFTaKkmUF0KQBy+xWooAqDSiyW4UCijTAZbcKBbi0xG3+G4wbSTXGjaQa6aoHzJkId14DpVdBwWWQkwk60DsAHT3Q7IX6k3D+T7Xf6yjbrOuJmyXG5YTHb4EHbwRn2sXbBkOw4zhsaYELQyq+XZGRWW54/V5wZ42un7cPXquFU72yChQYme2GdeWQaZqkA0Nw8GcxjboDoDkgLxuKpkPp1dFPrD8IVbuhU9KMlJHcSbDxIbg006iraYdNHui5ELtPXjY8Vwx35xt13QFY+jn8IbFupHatl+6INvHBIXirMb4JgC4/vFkHH7cYde4seKFURomEkYJcsTtF2NMG244m11cHPjoMte1GXdl1cG2OVTUSRhYWGOX+IGz0JNfvqVth62MwYwpsaDJ2LQewaKZVNRJGbrrCKNe0CzOJeHY+PDlPnDXpmjhLvvzJuF84zaoaCSN5pq3Wc1Z8ZmXA07dBfowpUlkCj94MoTC8UQc/nhP1h38x2kyfbFWNhJFLTIvc2yc+C6fCE4VQfR/MzBV1DuD5UlgyV5hYVQvfnDb6dvmN8qQJVtVIGIk1lZrOwFenxCm/rhxucMOLt8Mjc2BwGFbWwLdnovsMDl98zGSxbCTyFACmjUyJUBhW10NjJ2RnwPrFImQJDosT/NDZf49zuSlnYx5ztFg2csxnlIuvNMrDI2bqOiBNE3HVyhpjHf2TeaYFfvQ3q2okjHxtmucLC8QTiBDWYW0jvHcAlu2B77yxx8jKgEXXxx5ztEg9kdPnRdnlhKXF0ffDuohwT3THH+OZIpjsFOX2Hmj1xW+bCMtGdOCTI8Z1+SyxMyXLkrlQMdu4/vRI/LbJIBVr7euAtnPGdWUJLL8LpkyM38flFG0qS4y6Vp/YIGSQDuPzc2BDBUwwheYDQ9DQKQ67X/sgPU0coIVT4Z4Z0edFKCwiX9l3EiUvVg/PsR69bvLA1u9lFShKPmw/Fn1aJ0uzFz5TYAIUGdGBd/aDz5+w6d/8PiDeXZQkDFCYDuoPioMwFE7cNqzD2gaRWVGF0rzWD12w/kDidh82R0e9KlCeoNvdBrtOxL/fcFLdujAzJpnG9w9CS4xf/Hg3vL1f3bowMyZGQmFYtU+EHRE6e+GVL0QQORaMWe43MAgv7xVPptUHy/dCn8T7RiKUpUzt5n+TjR83kmqMG0k1NKDfbhEK8GtAs90qFODRgGq7VSigWkP8VWiN3UokWAPsjCz2V4EKoB4I2CYpeQIIrQ8gtPMXTBlDUjZc+rYAAAAASUVORK5CYII=",
          name: "请假"
        },
        {
          logosrc:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAETElEQVRoge2abWxTVRjHf70b62ArOmangG/DISKoQ8c2jUaZISETnS8kaqKJxkScGpMR/CIiUSEYJS7iByJgYjBR5AuG1+jGXkTB0cmCDGG6MRCqdmMOt5bZrev1w1m9t9rS7p6z3Gr2+9Jzzz3n9P/vPS/PfVJH2WadEe4HqoD5QDapjR/wAO8CuwC0kRurgR3AAlLfBAiNC4CdCO2kA4uBFTaKkmUF0KQBy+xWooAqDSiyW4UCijTAZbcKBbi0xG3+G4wbSTXGjaQa6aoHzJkId14DpVdBwWWQkwk60DsAHT3Q7IX6k3D+T7Xf6yjbrOuJmyXG5YTHb4EHbwRn2sXbBkOw4zhsaYELQyq+XZGRWW54/V5wZ42un7cPXquFU72yChQYme2GdeWQaZqkA0Nw8GcxjboDoDkgLxuKpkPp1dFPrD8IVbuhU9KMlJHcSbDxIbg006iraYdNHui5ELtPXjY8Vwx35xt13QFY+jn8IbFupHatl+6INvHBIXirMb4JgC4/vFkHH7cYde4seKFURomEkYJcsTtF2NMG244m11cHPjoMte1GXdl1cG2OVTUSRhYWGOX+IGz0JNfvqVth62MwYwpsaDJ2LQewaKZVNRJGbrrCKNe0CzOJeHY+PDlPnDXpmjhLvvzJuF84zaoaCSN5pq3Wc1Z8ZmXA07dBfowpUlkCj94MoTC8UQc/nhP1h38x2kyfbFWNhJFLTIvc2yc+C6fCE4VQfR/MzBV1DuD5UlgyV5hYVQvfnDb6dvmN8qQJVtVIGIk1lZrOwFenxCm/rhxucMOLt8Mjc2BwGFbWwLdnovsMDl98zGSxbCTyFACmjUyJUBhW10NjJ2RnwPrFImQJDosT/NDZf49zuSlnYx5ztFg2csxnlIuvNMrDI2bqOiBNE3HVyhpjHf2TeaYFfvQ3q2okjHxtmucLC8QTiBDWYW0jvHcAlu2B77yxx8jKgEXXxx5ztEg9kdPnRdnlhKXF0ffDuohwT3THH+OZIpjsFOX2Hmj1xW+bCMtGdOCTI8Z1+SyxMyXLkrlQMdu4/vRI/LbJIBVr7euAtnPGdWUJLL8LpkyM38flFG0qS4y6Vp/YIGSQDuPzc2BDBUwwheYDQ9DQKQ67X/sgPU0coIVT4Z4Z0edFKCwiX9l3EiUvVg/PsR69bvLA1u9lFShKPmw/Fn1aJ0uzFz5TYAIUGdGBd/aDz5+w6d/8PiDeXZQkDFCYDuoPioMwFE7cNqzD2gaRWVGF0rzWD12w/kDidh82R0e9KlCeoNvdBrtOxL/fcFLdujAzJpnG9w9CS4xf/Hg3vL1f3bowMyZGQmFYtU+EHRE6e+GVL0QQORaMWe43MAgv7xVPptUHy/dCn8T7RiKUpUzt5n+TjR83kmqMG0k1NKDfbhEK8GtAs90qFODRgGq7VSigWkP8VWiN3UokWAPsjCz2V4EKoB4I2CYpeQIIrQ8gtPMXTBlDUjZc+rYAAAAASUVORK5CYII=",
          name: "请假"
        },
        {
          logosrc:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAETElEQVRoge2abWxTVRjHf70b62ArOmangG/DISKoQ8c2jUaZISETnS8kaqKJxkScGpMR/CIiUSEYJS7iByJgYjBR5AuG1+jGXkTB0cmCDGG6MRCqdmMOt5bZrev1w1m9t9rS7p6z3Gr2+9Jzzz3n9P/vPS/PfVJH2WadEe4HqoD5QDapjR/wAO8CuwC0kRurgR3AAlLfBAiNC4CdCO2kA4uBFTaKkmUF0KQBy+xWooAqDSiyW4UCijTAZbcKBbi0xG3+G4wbSTXGjaQa6aoHzJkId14DpVdBwWWQkwk60DsAHT3Q7IX6k3D+T7Xf6yjbrOuJmyXG5YTHb4EHbwRn2sXbBkOw4zhsaYELQyq+XZGRWW54/V5wZ42un7cPXquFU72yChQYme2GdeWQaZqkA0Nw8GcxjboDoDkgLxuKpkPp1dFPrD8IVbuhU9KMlJHcSbDxIbg006iraYdNHui5ELtPXjY8Vwx35xt13QFY+jn8IbFupHatl+6INvHBIXirMb4JgC4/vFkHH7cYde4seKFURomEkYJcsTtF2NMG244m11cHPjoMte1GXdl1cG2OVTUSRhYWGOX+IGz0JNfvqVth62MwYwpsaDJ2LQewaKZVNRJGbrrCKNe0CzOJeHY+PDlPnDXpmjhLvvzJuF84zaoaCSN5pq3Wc1Z8ZmXA07dBfowpUlkCj94MoTC8UQc/nhP1h38x2kyfbFWNhJFLTIvc2yc+C6fCE4VQfR/MzBV1DuD5UlgyV5hYVQvfnDb6dvmN8qQJVtVIGIk1lZrOwFenxCm/rhxucMOLt8Mjc2BwGFbWwLdnovsMDl98zGSxbCTyFACmjUyJUBhW10NjJ2RnwPrFImQJDosT/NDZf49zuSlnYx5ztFg2csxnlIuvNMrDI2bqOiBNE3HVyhpjHf2TeaYFfvQ3q2okjHxtmucLC8QTiBDWYW0jvHcAlu2B77yxx8jKgEXXxx5ztEg9kdPnRdnlhKXF0ffDuohwT3THH+OZIpjsFOX2Hmj1xW+bCMtGdOCTI8Z1+SyxMyXLkrlQMdu4/vRI/LbJIBVr7euAtnPGdWUJLL8LpkyM38flFG0qS4y6Vp/YIGSQDuPzc2BDBUwwheYDQ9DQKQ67X/sgPU0coIVT4Z4Z0edFKCwiX9l3EiUvVg/PsR69bvLA1u9lFShKPmw/Fn1aJ0uzFz5TYAIUGdGBd/aDz5+w6d/8PiDeXZQkDFCYDuoPioMwFE7cNqzD2gaRWVGF0rzWD12w/kDidh82R0e9KlCeoNvdBrtOxL/fcFLdujAzJpnG9w9CS4xf/Hg3vL1f3bowMyZGQmFYtU+EHRE6e+GVL0QQORaMWe43MAgv7xVPptUHy/dCn8T7RiKUpUzt5n+TjR83kmqMG0k1NKDfbhEK8GtAs90qFODRgGq7VSigWkP8VWiN3UokWAPsjCz2V4EKoB4I2CYpeQIIrQ8gtPMXTBlDUjZc+rYAAAAASUVORK5CYII=",
          name: "请假"
        },
        {
          logosrc:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAETElEQVRoge2abWxTVRjHf70b62ArOmangG/DISKoQ8c2jUaZISETnS8kaqKJxkScGpMR/CIiUSEYJS7iByJgYjBR5AuG1+jGXkTB0cmCDGG6MRCqdmMOt5bZrev1w1m9t9rS7p6z3Gr2+9Jzzz3n9P/vPS/PfVJH2WadEe4HqoD5QDapjR/wAO8CuwC0kRurgR3AAlLfBAiNC4CdCO2kA4uBFTaKkmUF0KQBy+xWooAqDSiyW4UCijTAZbcKBbi0xG3+G4wbSTXGjaQa6aoHzJkId14DpVdBwWWQkwk60DsAHT3Q7IX6k3D+T7Xf6yjbrOuJmyXG5YTHb4EHbwRn2sXbBkOw4zhsaYELQyq+XZGRWW54/V5wZ42un7cPXquFU72yChQYme2GdeWQaZqkA0Nw8GcxjboDoDkgLxuKpkPp1dFPrD8IVbuhU9KMlJHcSbDxIbg006iraYdNHui5ELtPXjY8Vwx35xt13QFY+jn8IbFupHatl+6INvHBIXirMb4JgC4/vFkHH7cYde4seKFURomEkYJcsTtF2NMG244m11cHPjoMte1GXdl1cG2OVTUSRhYWGOX+IGz0JNfvqVth62MwYwpsaDJ2LQewaKZVNRJGbrrCKNe0CzOJeHY+PDlPnDXpmjhLvvzJuF84zaoaCSN5pq3Wc1Z8ZmXA07dBfowpUlkCj94MoTC8UQc/nhP1h38x2kyfbFWNhJFLTIvc2yc+C6fCE4VQfR/MzBV1DuD5UlgyV5hYVQvfnDb6dvmN8qQJVtVIGIk1lZrOwFenxCm/rhxucMOLt8Mjc2BwGFbWwLdnovsMDl98zGSxbCTyFACmjUyJUBhW10NjJ2RnwPrFImQJDosT/NDZf49zuSlnYx5ztFg2csxnlIuvNMrDI2bqOiBNE3HVyhpjHf2TeaYFfvQ3q2okjHxtmucLC8QTiBDWYW0jvHcAlu2B77yxx8jKgEXXxx5ztEg9kdPnRdnlhKXF0ffDuohwT3THH+OZIpjsFOX2Hmj1xW+bCMtGdOCTI8Z1+SyxMyXLkrlQMdu4/vRI/LbJIBVr7euAtnPGdWUJLL8LpkyM38flFG0qS4y6Vp/YIGSQDuPzc2BDBUwwheYDQ9DQKQ67X/sgPU0coIVT4Z4Z0edFKCwiX9l3EiUvVg/PsR69bvLA1u9lFShKPmw/Fn1aJ0uzFz5TYAIUGdGBd/aDz5+w6d/8PiDeXZQkDFCYDuoPioMwFE7cNqzD2gaRWVGF0rzWD12w/kDidh82R0e9KlCeoNvdBrtOxL/fcFLdujAzJpnG9w9CS4xf/Hg3vL1f3bowMyZGQmFYtU+EHRE6e+GVL0QQORaMWe43MAgv7xVPptUHy/dCn8T7RiKUpUzt5n+TjR83kmqMG0k1NKDfbhEK8GtAs90qFODRgGq7VSigWkP8VWiN3UokWAPsjCz2V4EKoB4I2CYpeQIIrQ8gtPMXTBlDUjZc+rYAAAAASUVORK5CYII=",
          name: "请假"
        }
      ],
      toggleshowstatus: true,
      pingshenNum: 2,
      kaoqinNum: 15
    };
  },
  methods: {
    openFullScreen() {
      const loading = this.$loading({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      });
      setTimeout(() => {
        loading.close();
      }, 1500);
    },
    toggleshow() {
      this.toggleshowstatus = !this.toggleshowstatus;
    },
    routerTo(href) {
      if (!href) {
        this.$alert("此功能正在开发中，敬请期待", "提示", {
          confirmButtonText: "好的"
        });
      }
      this.$router.push({
        path: href
      });
    },
    toMyshenpi(){
      this.$router.push({
        path:"/pages/office/myshenpi"
      })
    }
  },
  mounted() {
    console.log("全员排名页");
  }
};
</script>

<style lang="scss" scoped>
.office-box {
  .office-title {
    height: 70px;
    line-height: 70px;
    padding-left: 10px;
    font-size: 16px;
    color: #2e2f33;
    border-bottom: 1px solid #ededed;
    display: flex;
    justify-content: space-between;
    background: #fff;

    .left-header {
      font-size: 16px;
      cursor: pointer;

      .officehome-icon {
        margin: 0 8px;
        display: inline-block;
        transform: translateY(20%);
        width: 20px;
        height: 20px;
        background-image: url("../../assets/office/icon_office_active.png");
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
      }
      .shenpi-icon {
        margin: 0 8px;
        display: inline-block;
        transform: translateY(20%);
        width: 17px;
        height: 20px;
        background-image: url("../../assets/office/icon_shenpi1_active.png");
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
      }
    }

    .right-btns {
      button {
        border: none;
        background: none;
        color: #8a8d99;
        outline: none;
        cursor: pointer;
        margin-right: 30px;
        position: relative;
        .right-corner {
          position: absolute;
          background-color: #f74a4a;
          color: #ffffff;
          font-size: 12px;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          top: 19%;
          right: -10%;
          line-height: 1.7;
          text-align: center;
        }
        i {
          margin-right: 8px;
          height: 20px;
          display: inline-block;
          transform: translateY(20%);
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
          &.myshenpi-icon {
            width: 20px;
            background-image: url("../../assets/office/icon_dongtai.png");
          }
        }
        &:hover {
          color: #6680ff;
          .myshenpi-icon {
            background-image: url("../../assets/office/icon_dongtai_active.png");
          }
        }
      }
    }
  }

  .office-content {
    margin: 20px;
    .apps-wrap {
      .type-header {
        display: flex;
        justify-content: space-between;
        font-size: 16px;
        color: #b8bbcc;
        height: 30px;
        line-height: 30px;
        border-bottom: 1px solid #ededed;

        .toggle-btn {
          cursor: pointer;
          display: flex;
          align-items: center;

          .showing {
            width: 12px;
            height: 6px;
            margin-left: 3px;
            line-height: 30px;
            background-image: url("../../assets/office/bottom.png");
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
            transform: rotate(180deg);

            &.hiding {
              transform: rotate(0deg);
            }
          }
        }
      }

      .apps-list {
        list-style: none;
        display: flex;

        flex-wrap: wrap;

        .apps-item {
          width: 237px;
          height: 90px;
          background-color: #ffffff;
          box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.08);
          border-radius: 4px;
          border: solid 1px #ededed;
          margin-right: 20px;
          margin-top: 20px;
          cursor: pointer;
          display: flex;
          align-items: center;
          padding: 20px;

          .item-logo {
            width: 50px;
            height: 50px;
            border-radius: 5px;
            margin-right: 20px;
          }

          .item-name {
            font-size: 16px;
            color: #2e2f33;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
    }
  }
}
</style>
