import { cls } from 'tagged-classnames-free'

import MonitorPanel from './components/MonitorPanel'

import type { IndexPageData } from './+data'

import { usePageContext } from '#src/renderer/usePageContext'
import { config } from '#src/config'
import { useMounted } from '#src/hooks/mounted'

export default function Page() {
  const { data: { allMonitors, kvData, filter } } = usePageContext<IndexPageData>()
  const inputRef = useRef<HTMLInputElement>(null)
  const [inputFocused, setInputFocused] = useState(false)
  const [searchValue, setSearchValue] = useState(filter || '')
  const deferredSearch = useDeferredValue(searchValue)
  const { mounted } = useMounted()

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === '/' && !inputFocused) {
        event.stopPropagation()
        event.preventDefault()
        inputRef.current?.focus()
      }
    }

    window.addEventListener('keyup', handler)

    return () => {
      window.removeEventListener('keyup', handler)
    }
  }, [inputFocused])

  useEffect(() => {
    const url = new URL(window.location.href)
    if (deferredSearch.trim()) {
      url.searchParams.set('filter', deferredSearch)
      history.replaceState(null, '', url)
    } else {
      url.searchParams.delete('filter')
      history.replaceState(null, '', url)
    }
  }, [deferredSearch])

  if (config.settings.csr === true && !mounted) {
    return null
  }

  return (
    <div className='container max-w-screen-xl pt-4'>
      <header className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <img src='https://cdn-hariyonorizki.eu.org/storageapis/public/favicon.ico' alt='Kiki Creative Media Logo' className='size-10' />
          <h1 className='text-3xl'>{config.settings.title}</h1>
        </div>
        <div>
          <input
            ref={inputRef}
            value={searchValue}
            onChange={((event) => {
              setSearchValue(event.target.value)
            })}
            onKeyUp={(event) => {
              if (event.key.toLowerCase() === 'escape') {
                event.stopPropagation()
                event.preventDefault()
                setSearchValue('')
                inputRef.current?.blur()
              }
            }}
            onFocus={() => {
              setInputFocused(true)
            }}
            onBlur={() => {
              setInputFocused(false)
            }}
            className={cls`
              h-10 rounded-full border px-4 shadow outline-none
              transition-all focus:border-cyan-400
            `}
            placeholder='Type "/" to search'
          />
        </div>
      </header>
      <main>
        <MonitorPanel
          allMonitors={allMonitors}
          data={kvData}
          className={cls`mt-4`}
          search={deferredSearch}
        />
      </main>
      <footer className="my-4 flex flex-col items-center text-center text-sm gap-1"></br>
   <hr className="w-full border-t border-gray-200 opacity-40 my-2" />
  <div>
    © 2026 Kiki Creative Media - All rights reserved.
  </div>

  <div>
    Powered with&nbsp;
    <a href="https://github.com/eidam/cf-workers-status-page">
      eidam/cf-workers-status-page
    </a>.
  </div>
  
  <div>
    Modified by&nbsp;
    <a href="https://github.com/naodeng/cf-workers-status-page">
      naodeng/cf-workers-status-page
    </a>.
  </div>
</footer>
    </div>
  )
}
