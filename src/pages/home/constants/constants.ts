import {
  CanhQue,
  CayQueCao2,
  NongDan,
  NongDan1,
  NongDan2,
  NongDan3,
  QueXs1,
  QueXs2,
  QueXs3,
  ThanQue,
  cayquecon,
  cayquexanh,
  nongdan4,
  nongdan5,
  quechethanh,
  quedapcanh,
  queong,
  queongcaovo
} from 'src/assets/img'

export const data_about_company =
{
  desc: `
   <p> Chúng tôi là một doanh nghiệp tại TP. Đà Nẵng, tiên phong trong đầu tư, nghiên cứu, phát triển, bảo tồn cây dược liệu và cây quế. </p>
    <p>Với gần 30 năm kinh nghiệm trong lĩnh vực trồng và chế biến cây dược liệu, cây quế. Công ty Đức Duy Hinh tự hào là một trong những đơn vị hàng đầu của miền Trung ở lĩnh vực nuôi trồng và sản xuất các sản phẩm từ những thảo dược thuần túy hữu cơ.</p>
<p>Mục tiêu của công ty là đem đến cho khách hàng gần xa những sản phẩm <strong class="text-black"><i>thuần túy hữu cơ</i></strong> của địa phương chất lượng, an toàn nhất.</p>
    `
}


const data_about = [
  {
    id: 1,
    title: 'Tầm Nhìn',
    img: CayQueCao2,
    desc: `<p>
    Đức Duy Hinh mong muốn đưa hình ảnh, chất lượng của cây quế Quảng Nam từ một sản phẩm làm gia vị đi sâu vào lĩnh vực bào chế thuốc cải thiện <strong class="text-black"><i>sức khỏe cho con người</i></strong> ở Việt Nam và ra thương trường quốc tế.
    </p>`
  },
  {
    id: 2,
    title: 'Sứ mệnh',
    img: cayquexanh,
    desc: `<p>
  Đức Duy Hinh quyết tâm đưa cây quế miền Trung đi khắp năm châu, trên hết là việc bảo vệ <strong class="text-black"><i>giống cây quế</i></strong> thuần túy của địa phương <strong class="text-black"><i>đậm chất tinh dầu</i></strong>, tạo nhiều việc làm cho bà con nông dân, đem lại lợi ích thiết thực cho xã hội.
    </p>`
  },
  {
    id: 3,
    title: 'Giá Trị Cốt Lõi',
    img: cayquecon,
    desc: '<p>Đức Duy Hinh quyết tâm gìn giữ chất lượng sản phẩm là yếu tố quan trọng nhất, là nền tảng để xây dựng thương hiệu và đem lại lợi ích cho nông dân song hành cùng lợi ích khách hàng.</p>'
  }
] as const

export const photos = [
  {
    src: nongdan5,
    width: 4,
    height: 4
  },
  {
    src: cayquexanh,
    width: 4,
    height: 4
  },
  {
    src: nongdan4,
    width: 4,
    height: 4
  },
  {
    src: cayquecon,
    width: 4,
    height: 4
  },
  {
    src: NongDan3,
    width: 4,
    height: 4
  },
  {
    src: quechethanh,
    width: 4,
    height: 4
  },
  {
    src: queong,
    width: 4,
    height: 4
  },
  {
    src: quedapcanh,
    width: 4,
    height: 4
  },
  {
    src: queongcaovo,
    width: 4,
    height: 4
  },
  {
    src: CayQueCao2,
    width: 4,
    height: 4
  },
  {
    src: NongDan,
    width: 4,
    height: 4
  },
  {
    src: NongDan2,
    width: 4,
    height: 4
  },

  {
    src: NongDan1,
    width: 4,
    height: 4
  },
  {
    src: ThanQue,
    width: 4,
    height: 4
  },
  {
    src: QueXs1,
    width: 4,
    height: 4
  },
  {
    src: QueXs2,
    width: 4,
    height: 4
  },
  {
    src: QueXs3,
    width: 4,
    height: 4
  }
]

export default data_about
