# staticness
Staticness, verilerini json içerisinden alan statik bir web projesidir. <br>
Staticness is a static web project that takes its data from json.

## Staticness Skeleton

### Variables
```
Data
```
#### Using
Data.json
```
{
  social: [
    {
      "name":"Github",
      "url":"https://github.com/hitnux/staticness"
    },
    {
      "name":"Codepen",
      "url":"https://codepen.io/hitnux/pens/public"
    }
  ]
}
```
index.html
```
<ul>
  <li v-for="item in data['social']">{{item.name}}</li>
</ul>
```
<b>Demo: </b><a href="http://halilbilgin.com.tr/staticness/skeleton/">Skeleton Demo</a> <br>
## Staticness Blog
NOT GOOGLE FRIENDLY! / GOOGLE DOSTU DEĞİLDİR! <br>
### Variables:
```
Posts
```
<b>Demo: </b><a href="http://halilbilgin.com.tr/staticness/blog/">Blog Demo</a>

## Staticness Company
Please use static posts for SEO. / Lütfen SEO için statik yazılar kullanın.
### Variables:
```
Menu
Carousel
```
<b>Demo: </b><a href="http://halilbilgin.com.tr/staticness/company/">Company Demo</a> <br>
