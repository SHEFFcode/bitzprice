import Link from 'next/link'

export default () => (
  <div>
    <h1>Hello Next.js</h1>
    <p>Application to view bitcoing prices</p>
    <ul>
      <li>
        <Link href={'/about'}>
          <a>About</a>
        </Link>
      </li>
    </ul>
  </div>
)
