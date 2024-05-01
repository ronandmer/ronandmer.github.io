import { Button , Image, Linking, ScrollView, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';


export default function App() {
  return (
  <View>
    <Header/>
    <ScrollView>
      <Body/>
      <Footer/>
    </ScrollView>
  </View>
  );
}

var headerStyle = StyleSheet.create({
  container:{
    maxHeight:150,
    flex: true,
    flexDirection: 'row',
    padding: 5,
    margin: 10,
  }
})

function Header() {
  return (
    <View style={[headerStyle.container]}>
      <View style={{height: 50, maxWidth:260}}>
      <Image style={{maxHeight: '90%', maxWidth:'90%', aspectRatio:1}}
      source={require('./recommended-marketplace-high-resolution-logo-transparent.png')}/>
      </View>
      <View>
      <Text>This is the header</Text>
      </View>
    </View>
  )
}

function Body(props) {
  return (
    <View>
      <BodyTiles list={productData.products}/>
    </View>
  )
}


const { width } = Dimensions.get('window');

function BodyTiles(props) {
  return (
    <View>
      {console.log("screen width:"+ width)}
      <View style={{flexDirection:"row", flexWrap:"wrap", width: width}}>
      { props.list.map((item, index)=> <ProductTile key={index} product={item}/> )}
    </View>
    </View>
  )
}

const cardStyle = StyleSheet.create({
  container: {
    maxWidth: 193,
    height:undefined,
    padding: 5,
    margin: 10
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
});


function ProductTile(prop) {
  return(
    <TouchableOpacity  onPress={async ()=> { console.log("click on: "+prop.product.name+" "+prop.product.affiliateLink); await Linking.openURL(prop.product.affiliateLink)}}>
      <View style={[cardStyle.container, cardStyle.shadowProp]}>
          <View style={{alignItems:'center', backgroundColor: '#f8f8f8'}}>
            <Image style={{ width: '100%', height: undefined, aspectRatio: 1,}} 
              source={{uri: prop.product.images[0]}}/> 
          </View>
          <Text style={{alignItems:"center", marginBottom:10}}>
            {prop.product.name}
          </Text>
      </View>
    </TouchableOpacity>
  )
}

var footerStyle = StyleSheet.create({
  container:{
    height: 200
  }
  
});
function Footer() {
  return (
    <View style={[footerStyle.container]}>
      <Text>This is the Footer</Text>
    </View>
  )
}

const productData = {
  "version": "0.0.0",
  "products": [
      {
          "name":"JBL Professional Nano K8 8 Full-Range Powered Computer Reference Monitor Speakers",
          "description": "description1",
          "images":[
              "https://m.media-amazon.com/images/I/71Ye+beRgeL._SX679_.jpg",
              "https://m.media-amazon.com/images/I/71MLD8Kee7L._SX679_.jpg"
          ],
          "website":"AMAZON",
          "affiliateLink":"https://www.amazon.in/dp/B08GS4GKFM/?coliid=I1ARKCZPAJ8LDG&colid=3VCHIL7365BAI&ref_=list_c_wl_lv_vv_lig_dp_it&th=1"
      },
      {
          "name":"Whirlpool 7.5 Kg 5 Star Royal Fully-Automatic Top Load Washing Machine (WHITEMAGIC ROYAL 7.5 GENX, Grey, Hard Water Wash, ZPF Technology)",
          "description": "description2",
          "images":[
              "https://m.media-amazon.com/images/I/71UQCBlw7WL._AC_UL320_.jpg",  
              "https://m.media-amazon.com/images/I/71ze62IlZHL._SX679_.jpg"
          ],
          "website":"FLIPKART",
          "affiliateLink":"https://www.amazon.in/Whirlpool-7-5-Fully-Automatic-WHITEMAGIC-ROYAL/dp/B0C1MZ7BL3/ref=sr_1_1_sspa?_encoding=UTF8&content-id=amzn1.sym.58c90a12-100b-4a2f-8e15-7c06f1abe2be&dib=eyJ2IjoiMSJ9.xfswQE1lvuKxDNMYsbzTFmjUIjRb1w-02FrQO1xCaS0v5hpyE0nhDbRS4qKaZr-MNdiiy3hMS8-Y7-AzTe6aX163LWq56nZ93vHVPnE7Rosrq85kJFHD55-miRoxVCUVEcoHxpJROguXyzjM_q47bWp3vCSX9kp6W8a7LLNv1ruh1fR7fUsm1fzw_PHGCqyVco3SD3dmUtQZtKrFGCMmHnPir9P1Ov8ZJrocZH4XaxYW0TA5GpB3qiBtT0vTZmI0LqNFuTPF8mc2oNcxYPLKIf1lBuE3vNP7TV-6mo5ITPg.GJCj1Ew31heH5fJvSVO9jjDaKssFzI4nzbOtZTSgvwU&dib_tag=se&pd_rd_r=31abcabc-aa9c-4dcb-9849-d2fcd4149216&pd_rd_w=ITjYf&pd_rd_wg=3iokh&pf_rd_p=58c90a12-100b-4a2f-8e15-7c06f1abe2be&pf_rd_r=KSKNVWT1WYV7F1C9WRNZ&qid=1712648829&refinements=p_85%3A10440599031&rps=1&s=kitchen&sr=1-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGZfYnJvd3Nl&psc=1"
      },
      {
        "name":"Red Tape Casual Sneaker Shoes for Men | Stylish and Comfortable",
        "description": "description3",
        "images":[
            "https://m.media-amazon.com/images/I/61jzjuPckrL._SY695_.jpg",  
            "https://m.media-amazon.com/images/I/61+zjWTHE-L._SY695_.jpg"
        ],
        "website":"AMAZON",
        "affiliateLink":"https://www.amazon.in/Red-Tape-Mens-White-Sneakers/dp/B0CG66FPS6/ref=sr_1_1?dib=eyJ2IjoiMSJ9.UvZfGepojQ2KVRFSVU2tlM2edo939okbVhdFW4jllJnea7c3CixdPaVDQTQBksgVX7W4dNeCI1InBer_AG2V7apqFm-m8M62y89JRSKptdWsHsUxDENPV9igHHWVnEy3Ex5O9NkAfLuI5667fMYOpUGdzG-IG0Q7C9mbWPd45IUz2ZuRiXtUfRxnKg68IYQNm4bMfMXGRjO7mliQ6JdnB-vBl9KXogOy-F41-O7HHQZlq2lwmHjNUUGleP7hqw1hMpOVO4pJwW6I6TyScuu8L3EWTH74DuZk3VvI0Fo1cto.pFJJ53hYedHsdpEImLgVw2dT0KT_T5mJ7W3jPgTXHbc&dib_tag=se&pf_rd_i=1983518031&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_p=37502dfa-18f5-4cb3-9b38-0ec4e11f0de5&pf_rd_r=DGG6GPVNEBYVBEV5Z34D&pf_rd_s=merchandised-search-16&qid=1712648659&refinements=p_89%3ARed+Tape%2Cp_n_pct-off-with-tax%3A27060457031&rnid=2665398031&s=shoes&sr=1-1"
    },
    {
      "name":"Whirlpool 7.5 Kg 5 Star Royal Fully-Automatic Top Load Washing Machine (WHITEMAGIC ROYAL 7.5 GENX, Grey, Hard Water Wash, ZPF Technology)",
      "description": "description2",
      "images":[
          "https://m.media-amazon.com/images/I/71UQCBlw7WL._AC_UL320_.jpg",  
          "https://m.media-amazon.com/images/I/71ze62IlZHL._SX679_.jpg"
      ],
      "website":"FLIPKART",
      "affiliateLink":"https://www.amazon.in/Whirlpool-7-5-Fully-Automatic-WHITEMAGIC-ROYAL/dp/B0C1MZ7BL3/ref=sr_1_1_sspa?_encoding=UTF8&content-id=amzn1.sym.58c90a12-100b-4a2f-8e15-7c06f1abe2be&dib=eyJ2IjoiMSJ9.xfswQE1lvuKxDNMYsbzTFmjUIjRb1w-02FrQO1xCaS0v5hpyE0nhDbRS4qKaZr-MNdiiy3hMS8-Y7-AzTe6aX163LWq56nZ93vHVPnE7Rosrq85kJFHD55-miRoxVCUVEcoHxpJROguXyzjM_q47bWp3vCSX9kp6W8a7LLNv1ruh1fR7fUsm1fzw_PHGCqyVco3SD3dmUtQZtKrFGCMmHnPir9P1Ov8ZJrocZH4XaxYW0TA5GpB3qiBtT0vTZmI0LqNFuTPF8mc2oNcxYPLKIf1lBuE3vNP7TV-6mo5ITPg.GJCj1Ew31heH5fJvSVO9jjDaKssFzI4nzbOtZTSgvwU&dib_tag=se&pd_rd_r=31abcabc-aa9c-4dcb-9849-d2fcd4149216&pd_rd_w=ITjYf&pd_rd_wg=3iokh&pf_rd_p=58c90a12-100b-4a2f-8e15-7c06f1abe2be&pf_rd_r=KSKNVWT1WYV7F1C9WRNZ&qid=1712648829&refinements=p_85%3A10440599031&rps=1&s=kitchen&sr=1-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGZfYnJvd3Nl&psc=1"
  },
  {
    "name":"Red Tape Casual Sneaker Shoes for Men | Stylish and Comfortable",
    "description": "description3",
    "images":[
        "https://m.media-amazon.com/images/I/61jzjuPckrL._SY695_.jpg",  
        "https://m.media-amazon.com/images/I/61+zjWTHE-L._SY695_.jpg"
    ],
    "website":"AMAZON",
    "affiliateLink":"https://www.amazon.in/Red-Tape-Mens-White-Sneakers/dp/B0CG66FPS6/ref=sr_1_1?dib=eyJ2IjoiMSJ9.UvZfGepojQ2KVRFSVU2tlM2edo939okbVhdFW4jllJnea7c3CixdPaVDQTQBksgVX7W4dNeCI1InBer_AG2V7apqFm-m8M62y89JRSKptdWsHsUxDENPV9igHHWVnEy3Ex5O9NkAfLuI5667fMYOpUGdzG-IG0Q7C9mbWPd45IUz2ZuRiXtUfRxnKg68IYQNm4bMfMXGRjO7mliQ6JdnB-vBl9KXogOy-F41-O7HHQZlq2lwmHjNUUGleP7hqw1hMpOVO4pJwW6I6TyScuu8L3EWTH74DuZk3VvI0Fo1cto.pFJJ53hYedHsdpEImLgVw2dT0KT_T5mJ7W3jPgTXHbc&dib_tag=se&pf_rd_i=1983518031&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_p=37502dfa-18f5-4cb3-9b38-0ec4e11f0de5&pf_rd_r=DGG6GPVNEBYVBEV5Z34D&pf_rd_s=merchandised-search-16&qid=1712648659&refinements=p_89%3ARed+Tape%2Cp_n_pct-off-with-tax%3A27060457031&rnid=2665398031&s=shoes&sr=1-1"
},{
  "name":"JBL Professional Nano K8 8 Full-Range Powered Computer Reference Monitor Speakers",
  "description": "description1",
  "images":[
      "https://m.media-amazon.com/images/I/71Ye+beRgeL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71MLD8Kee7L._SX679_.jpg"
  ],
  "website":"AMAZON",
  "affiliateLink":"https://www.amazon.in/dp/B08GS4GKFM/?coliid=I1ARKCZPAJ8LDG&colid=3VCHIL7365BAI&ref_=list_c_wl_lv_vv_lig_dp_it&th=1"
},
{
  "name":"Whirlpool 7.5 Kg 5 Star Royal Fully-Automatic Top Load Washing Machine (WHITEMAGIC ROYAL 7.5 GENX, Grey, Hard Water Wash, ZPF Technology)",
  "description": "description2",
  "images":[
      "https://m.media-amazon.com/images/I/71UQCBlw7WL._AC_UL320_.jpg",  
      "https://m.media-amazon.com/images/I/71ze62IlZHL._SX679_.jpg"
  ],
  "website":"FLIPKART",
  "affiliateLink":"https://www.amazon.in/Whirlpool-7-5-Fully-Automatic-WHITEMAGIC-ROYAL/dp/B0C1MZ7BL3/ref=sr_1_1_sspa?_encoding=UTF8&content-id=amzn1.sym.58c90a12-100b-4a2f-8e15-7c06f1abe2be&dib=eyJ2IjoiMSJ9.xfswQE1lvuKxDNMYsbzTFmjUIjRb1w-02FrQO1xCaS0v5hpyE0nhDbRS4qKaZr-MNdiiy3hMS8-Y7-AzTe6aX163LWq56nZ93vHVPnE7Rosrq85kJFHD55-miRoxVCUVEcoHxpJROguXyzjM_q47bWp3vCSX9kp6W8a7LLNv1ruh1fR7fUsm1fzw_PHGCqyVco3SD3dmUtQZtKrFGCMmHnPir9P1Ov8ZJrocZH4XaxYW0TA5GpB3qiBtT0vTZmI0LqNFuTPF8mc2oNcxYPLKIf1lBuE3vNP7TV-6mo5ITPg.GJCj1Ew31heH5fJvSVO9jjDaKssFzI4nzbOtZTSgvwU&dib_tag=se&pd_rd_r=31abcabc-aa9c-4dcb-9849-d2fcd4149216&pd_rd_w=ITjYf&pd_rd_wg=3iokh&pf_rd_p=58c90a12-100b-4a2f-8e15-7c06f1abe2be&pf_rd_r=KSKNVWT1WYV7F1C9WRNZ&qid=1712648829&refinements=p_85%3A10440599031&rps=1&s=kitchen&sr=1-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGZfYnJvd3Nl&psc=1"
},{
  "name":"Red Tape Casual Sneaker Shoes for Men | Stylish and Comfortable",
  "description": "description3",
  "images":[
      "https://m.media-amazon.com/images/I/61jzjuPckrL._SY695_.jpg",  
      "https://m.media-amazon.com/images/I/61+zjWTHE-L._SY695_.jpg"
  ],
  "website":"AMAZON",
  "affiliateLink":"https://www.amazon.in/Red-Tape-Mens-White-Sneakers/dp/B0CG66FPS6/ref=sr_1_1?dib=eyJ2IjoiMSJ9.UvZfGepojQ2KVRFSVU2tlM2edo939okbVhdFW4jllJnea7c3CixdPaVDQTQBksgVX7W4dNeCI1InBer_AG2V7apqFm-m8M62y89JRSKptdWsHsUxDENPV9igHHWVnEy3Ex5O9NkAfLuI5667fMYOpUGdzG-IG0Q7C9mbWPd45IUz2ZuRiXtUfRxnKg68IYQNm4bMfMXGRjO7mliQ6JdnB-vBl9KXogOy-F41-O7HHQZlq2lwmHjNUUGleP7hqw1hMpOVO4pJwW6I6TyScuu8L3EWTH74DuZk3VvI0Fo1cto.pFJJ53hYedHsdpEImLgVw2dT0KT_T5mJ7W3jPgTXHbc&dib_tag=se&pf_rd_i=1983518031&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_p=37502dfa-18f5-4cb3-9b38-0ec4e11f0de5&pf_rd_r=DGG6GPVNEBYVBEV5Z34D&pf_rd_s=merchandised-search-16&qid=1712648659&refinements=p_89%3ARed+Tape%2Cp_n_pct-off-with-tax%3A27060457031&rnid=2665398031&s=shoes&sr=1-1"
},
{
"name":"Whirlpool 7.5 Kg 5 Star Royal Fully-Automatic Top Load Washing Machine (WHITEMAGIC ROYAL 7.5 GENX, Grey, Hard Water Wash, ZPF Technology)",
"description": "description2",
"images":[
    "https://m.media-amazon.com/images/I/71UQCBlw7WL._AC_UL320_.jpg",  
    "https://m.media-amazon.com/images/I/71ze62IlZHL._SX679_.jpg"
],
"website":"FLIPKART",
"affiliateLink":"https://www.amazon.in/Whirlpool-7-5-Fully-Automatic-WHITEMAGIC-ROYAL/dp/B0C1MZ7BL3/ref=sr_1_1_sspa?_encoding=UTF8&content-id=amzn1.sym.58c90a12-100b-4a2f-8e15-7c06f1abe2be&dib=eyJ2IjoiMSJ9.xfswQE1lvuKxDNMYsbzTFmjUIjRb1w-02FrQO1xCaS0v5hpyE0nhDbRS4qKaZr-MNdiiy3hMS8-Y7-AzTe6aX163LWq56nZ93vHVPnE7Rosrq85kJFHD55-miRoxVCUVEcoHxpJROguXyzjM_q47bWp3vCSX9kp6W8a7LLNv1ruh1fR7fUsm1fzw_PHGCqyVco3SD3dmUtQZtKrFGCMmHnPir9P1Ov8ZJrocZH4XaxYW0TA5GpB3qiBtT0vTZmI0LqNFuTPF8mc2oNcxYPLKIf1lBuE3vNP7TV-6mo5ITPg.GJCj1Ew31heH5fJvSVO9jjDaKssFzI4nzbOtZTSgvwU&dib_tag=se&pd_rd_r=31abcabc-aa9c-4dcb-9849-d2fcd4149216&pd_rd_w=ITjYf&pd_rd_wg=3iokh&pf_rd_p=58c90a12-100b-4a2f-8e15-7c06f1abe2be&pf_rd_r=KSKNVWT1WYV7F1C9WRNZ&qid=1712648829&refinements=p_85%3A10440599031&rps=1&s=kitchen&sr=1-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGZfYnJvd3Nl&psc=1"
},
{
"name":"Red Tape Casual Sneaker Shoes for Men | Stylish and Comfortable",
"description": "description3",
"images":[
  "https://m.media-amazon.com/images/I/61jzjuPckrL._SY695_.jpg",  
  "https://m.media-amazon.com/images/I/61+zjWTHE-L._SY695_.jpg"
],
"website":"AMAZON",
"affiliateLink":"https://www.amazon.in/Red-Tape-Mens-White-Sneakers/dp/B0CG66FPS6/ref=sr_1_1?dib=eyJ2IjoiMSJ9.UvZfGepojQ2KVRFSVU2tlM2edo939okbVhdFW4jllJnea7c3CixdPaVDQTQBksgVX7W4dNeCI1InBer_AG2V7apqFm-m8M62y89JRSKptdWsHsUxDENPV9igHHWVnEy3Ex5O9NkAfLuI5667fMYOpUGdzG-IG0Q7C9mbWPd45IUz2ZuRiXtUfRxnKg68IYQNm4bMfMXGRjO7mliQ6JdnB-vBl9KXogOy-F41-O7HHQZlq2lwmHjNUUGleP7hqw1hMpOVO4pJwW6I6TyScuu8L3EWTH74DuZk3VvI0Fo1cto.pFJJ53hYedHsdpEImLgVw2dT0KT_T5mJ7W3jPgTXHbc&dib_tag=se&pf_rd_i=1983518031&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_p=37502dfa-18f5-4cb3-9b38-0ec4e11f0de5&pf_rd_r=DGG6GPVNEBYVBEV5Z34D&pf_rd_s=merchandised-search-16&qid=1712648659&refinements=p_89%3ARed+Tape%2Cp_n_pct-off-with-tax%3A27060457031&rnid=2665398031&s=shoes&sr=1-1"
},{
"name":"JBL Professional Nano K8 8 Full-Range Powered Computer Reference Monitor Speakers",
"description": "description1",
"images":[
"https://m.media-amazon.com/images/I/71Ye+beRgeL._SX679_.jpg",
"https://m.media-amazon.com/images/I/71MLD8Kee7L._SX679_.jpg"
],
"website":"AMAZON",
"affiliateLink":"https://www.amazon.in/dp/B08GS4GKFM/?coliid=I1ARKCZPAJ8LDG&colid=3VCHIL7365BAI&ref_=list_c_wl_lv_vv_lig_dp_it&th=1"
},
  ]

}