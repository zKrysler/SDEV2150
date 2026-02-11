// two ways to ingest props as a functional componenet:
// 1. function takes one argument -> all props packed within an object
//  eg: functionBio(person) {return <p>{ person.name } is { person.age } years old.</p>}

// 2. function takes destructured arguments - . only extracts what you need
//  eg: function Bio({ name, age }) {return <p>{ name } is { age } years old. </p>} 

export default function Header({ tagline }) {
  return (
    <header className="mb-4">
      <div className="flex flex-wrap items-end justify-between gap-2">
        <div>
          <h1 className="text-xl font-semibold text-sky-600">NAIT Resource Directory</h1>
          <p className="text-sm text-gray-500">
            { tagline || 'Find student support services, labs, and campus resources.'}
          </p>
        </div>
      </div>
    </header>
  );
}
