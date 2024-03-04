 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
 import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBcym1i4oAyM2rFmBU_Ipa0vcC7Pdz0dws",
  authDomain: "insan-cemerlang-2e18f.firebaseapp.com",
  projectId: "insan-cemerlang-2e18f",
  storageBucket: "insan-cemerlang-2e18f.appspot.com",
  messagingSenderId: "1096016420480",
  appId: "1:1096016420480:web:87611389fc765e7ddbd065",
  measurementId: "G-DW23S2DXCR"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function ambilDaftarPembeli() {
  const refDokumen = collection(db,"pembeli");
  const kuery = query(refDokumen,orderBy("nama"));
  const cuplikankuery = await getDocs(kuery);
  
  let hasil = [];
  cuplikankuery.forEach((dok) => {
      hasil.push({ 
     id:dok.id, 
      nama: dok.data().nama,
      alamat:dok.data().alamat,
      notlpn: dok.data().notlpn,
      });
  });
  return hasil;
}
  export function formatAngka(x)  { 
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
export async function tambahpembeli(nama,alamat,notlpn){
  try {
    const dokRef = await addDoc(collection(db,'pembeli'),{
   nama: nama,
   alamat: alamat,
   notlpn: notlpn
    });
    console.log('berhasil menambah pembeli'+ dok )
  } catch (e) {
  console.log('Gagal menambah daftar pembeli' + e);
  }
}