import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Abyss',
  description: 'კონფიდენციალურობის პოლიტიკა - Abyss',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="bg-surface-container-low rounded-3xl p-8 md:p-12 border border-outline-variant/20 shadow-xl">
        <div className="prose prose-invert prose-headings:font-headline-md prose-headings:font-bold prose-h1:text-primary prose-a:text-primary hover:prose-a:text-primary-fixed max-w-none">
          <h1 className="text-3xl md:text-4xl mb-8">კონფიდენციალურობის პოლიტიკა</h1>

          <p className="text-on-surface-variant text-lg">
            მოგესალმებით <strong>abyss</strong>-ზე.
          </p>
          <p className="text-on-surface-variant text-lg">
            ეს კონფიდენციალურობის პოლიტიკა განმარტავს, რა სახის ინფორმაციას შეიძლება აგროვებდეს ჩვენი ვებსაიტი, რა მიზნით ვიყენებთ მას და როგორ შეგიძლიათ დაგვიკავშირდეთ თქვენს მონაცემებთან დაკავშირებულ საკითხებზე.
          </p>
          <p className="text-on-surface-variant text-lg mb-8">
            ვებსაიტის გამოყენებით გთხოვთ, გაეცნოთ ამ პოლიტიკას.
          </p>

          <h2 className="text-2xl mt-12 mb-4 text-on-surface">1. რა ინფორმაციას ვაგროვებთ?</h2>
          <p className="text-on-surface-variant mb-4">
            ინფორმაციის ტიპი დამოკიდებულია იმაზე, თუ როგორ იყენებთ ჩვენს ვებსაიტს.
          </p>
          
          <h3 className="text-xl mt-8 mb-3 text-on-surface">ინფორმაცია, რომელსაც თავად გვაწვდით</h3>
          <p className="text-on-surface-variant mb-3">თუ მოგვწერთ ელფოსტით ან საკონტაქტო ფორმის საშუალებით, შესაძლოა მივიღოთ:</p>
          <ul className="list-disc list-outside ml-6 space-y-2 text-on-surface-variant mb-4">
            <li>თქვენი სახელი;</li>
            <li>ელფოსტის მისამართი;</li>
            <li>შეტყობინების ტექსტი;</li>
            <li>სხვა ინფორმაცია, რომელსაც ნებაყოფლობით მოგვაწვდით.</li>
          </ul>
          <p className="text-on-surface-variant mb-6">
            გთხოვთ, საკონტაქტო ფორმაში არ მოგვაწოდოთ ისეთი პირადი ინფორმაცია, რომელიც თქვენი მოთხოვნის განსახილველად საჭირო არ არის.
          </p>

          <h3 className="text-xl mt-8 mb-3 text-on-surface">ტექნიკური ინფორმაცია</h3>
          <p className="text-on-surface-variant mb-3">
            ვებსაიტის მუშაობის უზრუნველსაყოფად, ჩვენი ჰოსტინგის ან ტექნიკური სერვისის პროვაიდერების მეშვეობით შეიძლება დამუშავდეს ტექნიკური ინფორმაცია, როგორიცაა:
          </p>
          <ul className="list-disc list-outside ml-6 space-y-2 text-on-surface-variant mb-4">
            <li>IP მისამართი;</li>
            <li>ბრაუზერის ტიპი;</li>
            <li>მოწყობილობისა და ოპერაციული სისტემის ზოგადი ინფორმაცია;</li>
            <li>მონახულებული გვერდები;</li>
            <li>მოთხოვნის თარიღი და დრო;</li>
            <li>ტექნიკური შეცდომების შესახებ ინფორმაცია.</li>
          </ul>
          <p className="text-on-surface-variant mb-8">
            ამ ინფორმაციის დამუშავება დამოკიდებულია რეალურად გამოყენებულ ტექნოლოგიებსა და სერვისებზე.
          </p>

          <h2 className="text-2xl mt-12 mb-4 text-on-surface">2. როგორ ვიყენებთ ინფორმაციას?</h2>
          <p className="text-on-surface-variant mb-3">ინფორმაცია შეიძლება გამოვიყენოთ შემდეგი მიზნებისთვის:</p>
          <ul className="list-disc list-outside ml-6 space-y-2 text-on-surface-variant mb-4">
            <li>ვებსაიტის მუშაობისა და უსაფრთხოების უზრუნველსაყოფად;</li>
            <li>თქვენს შეკითხვებსა და შეტყობინებებზე პასუხის გასაცემად;</li>
            <li>ტექნიკური პრობლემების გამოსავლენად;</li>
            <li>ვებსაიტის ხარისხისა და მომხმარებლის გამოცდილების გასაუმჯობესებლად;</li>
            <li>სამართლებრივი ვალდებულებების შესასრულებლად;</li>
            <li>რეკლამებისა და სტატისტიკური სერვისების ფუნქციონირებისთვის, თუ ისინი ჩართულია.</li>
          </ul>
          <p className="text-on-surface-variant mb-8">
            ინფორმაციას არ უნდა ვიყენებდეთ იმ მიზნებისთვის, რომლებიც ამ პოლიტიკასთან ან მოქმედ კანონმდებლობასთან შეუთავსებელია.
          </p>

          <h2 className="text-2xl mt-12 mb-4 text-on-surface">3. ქუქი-ფაილები (Cookies)</h2>
          <p className="text-on-surface-variant mb-3">
            ქუქი-ფაილები არის მცირე ზომის ფაილები, რომლებიც შეიძლება შეინახოს თქვენს მოწყობილობაზე ვებსაიტის გამოყენებისას.
          </p>
          <p className="text-on-surface-variant mb-3">ისინი შეიძლება გამოიყენებოდეს:</p>
          <ul className="list-disc list-outside ml-6 space-y-2 text-on-surface-variant mb-4">
            <li>საიტის ძირითადი ფუნქციების უზრუნველსაყოფად;</li>
            <li>მომხმარებლის პარამეტრების შესანახად;</li>
            <li>ვიზიტორთა სტატისტიკის გასაანალიზებლად;</li>
            <li>რეკლამების ჩვენებისა და შეფასებისთვის.</li>
          </ul>
          <p className="text-on-surface-variant mb-3">
            ზოგი ქუქი-ფაილი აუცილებელია საიტის ფუნქციონირებისთვის, ხოლო სხვა ქუქი-ფაილებს შეიძლება დამატებითი თანხმობა სჭირდებოდეს.
          </p>
          <p className="text-on-surface-variant mb-8">
            ქუქი-ფაილების მართვა შეგიძლიათ ბრაუზერის პარამეტრებიდან. თუმცა, ზოგიერთი ქუქი-ფაილის შეზღუდვამ შესაძლოა გავლენა მოახდინოს ვებსაიტის გარკვეულ ფუნქციებზე.
          </p>

          <h2 className="text-2xl mt-12 mb-4 text-on-surface">4. Google AdSense და მესამე მხარის სერვისები</h2>
          <p className="text-on-surface-variant mb-3">
            თუ ჩვენს ვებსაიტზე ჩართული იქნება Google AdSense, Google-მა და მისმა სარეკლამო ტექნოლოგიების პარტნიორებმა შეიძლება დაამუშაონ ინფორმაცია რეკლამების საჩვენებლად, სარეკლამო სერვისების გასაზომად და თაღლითური აქტივობის გამოსავლენად.
          </p>
          <p className="text-on-surface-variant mb-3">
            გამოყენებული სერვისებისა და მომხმარებლის თანხმობის პარამეტრების მიხედვით, შესაძლებელია ქუქი-ფაილების ან მსგავსი ტექნოლოგიების გამოყენება.
          </p>
          <p className="text-on-surface-variant mb-3">
            Google-ისა და მისი სარეკლამო სერვისების შესახებ დამატებითი ინფორმაციის მისაღებად იხილეთ: <br />
            <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noreferrer">https://policies.google.com/technologies/ads</a>
          </p>
          <p className="text-on-surface-variant mb-8">
            თუ ჩვენს ვებსაიტზე Google AdSense ან სხვა მესამე მხარის სარეკლამო სერვისი ჯერ არ არის ჩართული, ეს განყოფილება განიხილეთ როგორც სამომავლო ფუნქციის აღწერა და განაახლეთ პოლიტიკა სერვისის რეალურად გააქტიურებისას.
          </p>

          <h2 className="text-2xl mt-12 mb-4 text-on-surface">5. ვის შეიძლება გადაეცეს ინფორმაცია?</h2>
          <p className="text-on-surface-variant mb-3">
            ინფორმაცია შეიძლება დამუშავდეს იმ სერვისის მიმწოდებლების მიერ, რომლებიც საჭიროა ვებსაიტის ფუნქციონირებისთვის. ეს შეიძლება მოიცავდეს:
          </p>
          <ul className="list-disc list-outside ml-6 space-y-2 text-on-surface-variant mb-4">
            <li>ვებსაიტის ჰოსტინგის პროვაიდერს;</li>
            <li>ტექნიკური ინფრასტრუქტურის მომწოდებლებს;</li>
            <li>სტატისტიკური ან ანალიტიკური სერვისების მიმწოდებლებს;</li>
            <li>სარეკლამო სერვისების მიმწოდებლებს, თუ ისინი გამოიყენება.</li>
          </ul>
          <p className="text-on-surface-variant mb-8">
            ინფორმაცია შეიძლება ასევე გამჟღავნდეს, როდესაც ამას მოქმედი კანონმდებლობა მოითხოვს.
          </p>

          <h2 className="text-2xl mt-12 mb-4 text-on-surface">6. მონაცემების შენახვა და დაცვა</h2>
          <p className="text-on-surface-variant mb-3">
            ჩვენი მიზანია, ინფორმაცია შევინახოთ მხოლოდ იმ დროით, რაც საჭიროა შესაბამისი მიზნის მისაღწევად ან სამართლებრივი ვალდებულების შესასრულებლად.
          </p>
          <p className="text-on-surface-variant mb-3">
            ვიღებთ გონივრულ ტექნიკურ და ორგანიზაციულ ზომებს ინფორმაციის უნებართვო წვდომისგან, შეცვლისგან, დაკარგვისგან ან გამჟღავნებისგან დასაცავად.
          </p>
          <p className="text-on-surface-variant mb-8">
            ამასთან, ინტერნეტით ინფორმაციის გადაცემის ან ელექტრონული შენახვის აბსოლუტური უსაფრთხოების გარანტირება შეუძლებელია.
          </p>

          <h2 className="text-2xl mt-12 mb-4 text-on-surface">7. თქვენი უფლებები</h2>
          <p className="text-on-surface-variant mb-3">
            მოქმედი კანონმდებლობისა და კონკრეტული გარემოებების გათვალისწინებით, შესაძლოა გქონდეთ უფლება:
          </p>
          <ul className="list-disc list-outside ml-6 space-y-2 text-on-surface-variant mb-4">
            <li>მოითხოვოთ ინფორმაცია თქვენი პირადი მონაცემების დამუშავების შესახებ;</li>
            <li>მოითხოვოთ მონაცემებზე წვდომა;</li>
            <li>მოითხოვოთ არასწორი მონაცემების გასწორება;</li>
            <li>მოითხოვოთ მონაცემების წაშლა ან დამუშავების შეზღუდვა, როდესაც ამის სამართლებრივი საფუძველი არსებობს;</li>
            <li>გააპროტესტოთ მონაცემების გარკვეული სახით დამუშავება;</li>
            <li>გამოიხმოთ თანხმობა, როდესაც დამუშავება თანხმობას ეფუძნება.</li>
          </ul>
          <p className="text-on-surface-variant mb-4">
            თქვენი უფლებების გამოსაყენებლად დაგვიკავშირდით:
          </p>
          <p className="text-on-surface-variant font-medium text-lg my-4 bg-surface-container p-4 rounded-xl inline-block border border-outline-variant/30">
            <strong>ელფოსტა:</strong> <a href="mailto:abyssmanhua@gmail.com">abyssmanhua@gmail.com</a>
          </p>
          <p className="text-on-surface-variant mb-8">
            კონკრეტული მოთხოვნის შესრულება დამოკიდებულია მოქმედ კანონმდებლობაზე და მოთხოვნის გარემოებებზე.
          </p>

          <h2 className="text-2xl mt-12 mb-4 text-on-surface">8. ბავშვების კონფიდენციალურობა</h2>
          <p className="text-on-surface-variant mb-3">
            ჩვენი ვებსაიტის მომხმარებლებმა უნდა დაიცვან მათზე გავრცელებული ასაკობრივი მოთხოვნები და მოქმედი კანონმდებლობა.
          </p>
          <p className="text-on-surface-variant mb-8">
            თუ გავიგებთ, რომ პირადი ინფორმაცია დამუშავდა ისეთი ფორმით, რომელიც მოქმედ კანონმდებლობას ეწინააღმდეგება, მივიღებთ შესაბამის ზომებს.
          </p>

          <h2 className="text-2xl mt-12 mb-4 text-on-surface">9. პოლიტიკის ცვლილებები</h2>
          <p className="text-on-surface-variant mb-3">
            შესაძლოა პერიოდულად განვაახლოთ ეს პოლიტიკა, მათ შორის ახალი ფუნქციების, ტექნოლოგიებისა და სამართლებრივი მოთხოვნების გათვალისწინებით.
          </p>
          <p className="text-on-surface-variant mb-8">
            განახლებული ვერსია გამოქვეყნდება ამავე გვერდზე შესაბამისი თარიღით.
          </p>

          <h2 className="text-2xl mt-12 mb-4 text-on-surface">10. დაგვიკავშირდით</h2>
          <p className="text-on-surface-variant mb-3">
            ამ პოლიტიკასთან ან თქვენს პირად მონაცემებთან დაკავშირებული შეკითხვების შემთხვევაში მოგვწერეთ:
          </p>
          <p className="text-primary font-bold text-xl mb-4 mt-8">
            abyss
          </p>
          <p className="text-on-surface-variant font-medium text-lg mb-8">
            <strong>ელფოსტა:</strong> <a href="mailto:abyssmanhua@gmail.com">abyssmanhua@gmail.com</a>
          </p>

        </div>
      </div>
    </div>
  )
}
