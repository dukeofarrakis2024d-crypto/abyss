import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Abyss',
  description: 'დაგვიკავშირდით - Abyss',
}

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="bg-surface-container-low rounded-3xl p-8 md:p-12 border border-outline-variant/20 shadow-xl">
        <div className="prose prose-invert prose-headings:font-headline-md prose-headings:font-bold prose-h1:text-primary prose-a:text-primary hover:prose-a:text-primary-fixed max-w-none">
          <h1 className="text-3xl md:text-4xl mb-8">დაგვიკავშირდით</h1>

          <p className="text-on-surface-variant text-lg">
            გაქვთ შეკითხვა, წინადადება ან გსურთ ჩვენთან დაკავშირება?
          </p>

          <p className="text-on-surface-variant text-lg mb-8">
            მოხარული ვიქნებით, თუ მოგვწერთ. შეგიძლიათ დაგვიკავშირდეთ ვებსაიტთან, ტექნიკურ პრობლემებთან, თანამშრომლობასთან ან საავტორო უფლებებთან დაკავშირებულ საკითხებზე.
          </p>

          <h2 className="text-2xl mt-12 mb-4 text-on-surface">საკონტაქტო ინფორმაცია</h2>
          <p className="text-on-surface-variant font-medium text-lg my-4 bg-surface-container p-4 rounded-xl inline-block border border-outline-variant/30">
            <strong>ელფოსტა:</strong> <a href="mailto:abyssmanhua@gmail.com">abyssmanhua@gmail.com</a>
          </p>

          <h2 className="text-2xl mt-12 mb-4 text-on-surface">საავტორო უფლებებთან დაკავშირებული საკითხები</h2>
          <p className="text-on-surface-variant">
            თუ თქვენ ხართ ავტორი, მხატვარი, გამომცემელი ან ნაწარმოების უფლებამოსილი მფლობელი და გაქვთ შეკითხვა ჩვენს ვებსაიტზე განთავსებულ მასალასთან დაკავშირებით, გთხოვთ, მიუთითოთ კონკრეტული გვერდის ბმული და აღწეროთ თქვენი მოთხოვნა.
          </p>
          <p className="text-on-surface-variant mt-3 mb-8">
            საჭიროების შემთხვევაში, შესაძლოა მოგთხოვოთ დამატებითი ინფორმაცია უფლებების დასადასტურებლად.
          </p>

          <h2 className="text-2xl mt-12 mb-4 text-on-surface">ტექნიკური პრობლემები და წინადადებები</h2>
          <p className="text-on-surface-variant">
            თუ აღმოაჩენთ გაუმართავ ბმულს, გვერდის ჩატვირთვის პრობლემას ან სხვა ტექნიკურ ხარვეზს, გთხოვთ, მოგვწეროთ და შეძლებისდაგვარად აღწეროთ პრობლემა.
          </p>

          <p className="text-on-surface-variant text-lg mt-8 mb-4">
            მადლობა თქვენი უკუკავშირისთვის!
          </p>

          <p className="text-primary font-bold text-xl">
            abyss — ქართული მანჰუას პლატფორმა
          </p>
        </div>
      </div>
    </div>
  )
}
