export default function BookList() {
   let pageTitle = "Books To Read";
   let book1 = "https://m.media-amazon.com/images/I/41DMG0qnl5L._SL500_.jpg";
   let book2 = "https://m.media-amazon.com/images/I/41qeSwmdxVL.jpg";
   let book3 = "https://m.media-amazon.com/images/I/51v4HwytF1L._SX344_BO1,204,203,200_.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="The Art of Witty Banter" />
         <img src={book2} alt="Free Will" />
         <img src={book3} alt="The Road Less Stupid" />
      </div>      
   );
}