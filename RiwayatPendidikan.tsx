export default function MyApp() {
  return (
<div className="container mx-auto p-2 text-center pt-15">
          <h2 className="text-grey font-bold">RIWAYAT PENDIDIKAN </h2>
         <RowRiwayat jenjang="SD" sekolah="SDN Bangkir" tahun="2010" />
         <RowRiwayat jenjang="SMP" sekolah="SMP Negeri 1 Cimanggung" tahun="2016" />
         <RowRiwayat jenjang="SMK" sekolah="SMA Negeri Cimanggung" tahun="2019" />
         <RowRiwayat jenjang="KULIAH" sekolah="UNIVERSITAS MA'SOEM" tahun="2022" />
        </div>
);
}
interface RowRiwayatProps {
  jenjang: string;
  sekolah: string;
  tahun: string;
}
function RowRiwayat(props: RowRiwayatProps) {
  return (
    <div className="border-2 border-blue-900/75 rounded-lg bg-blue-900 text-white p-2 my-5">
      <div className="container mx-auto ">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-4 ">{props.jenjang}</div>
          <div className="col-span-12 md:col-span-4">{props.sekolah}</div>
          <div className="col-span-12 md:col-span-4">{props.tahun}</div>
          
        </div>
      </div>
    </div>
  )
}
