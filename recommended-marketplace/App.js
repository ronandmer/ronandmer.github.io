import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

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

function Header() {
  return (
    <Text>This is the header</Text>
  )
}

function Body(props) {
  return (
    <View>
      <BodyTiles list={productData.products}/>
    </View>
  )
}

function BodyTiles(props) {
  return(
      <View>
        <FlatList data={props.list}
        renderItem={({item}) => <ProductTile product={item}/> }/>
      </View>
  )
}

function ProductTile(prop) {
  return(
    <View>
      <View>Name: {prop.product.name}</View>
      <View>Description: {prop.product.description}</View>
      <View><Image source={{uri: prop.product.images[0]}} style={{width: 300, height: 500}}/></View>
       <View>website: {prop.product.website}</View>
       <View>go: {prop.product.affiliateLink}</View>  
    </View>
  )
}

function Footer() {
  return (
    <View>This is the Footer</View>
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
              "https://m.media-amazon.com/images/I/61iQRax3uyL._SY879_.jpg",  
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
    }
  ]

}