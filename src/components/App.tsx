import {
  useCallback,
  useDeferredValue,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  ChangeEvent
} from 'react'
import { AxiosError } from 'axios'
import { palindromeStatus } from '../utils'
import fetchPalindromeInfo from '../services/fetch-palindrome-info.service'

const App = () => {
  const [inputText, setInputText] = useState('')
  const [resultantText, setResultantText] = useState<string[] | JSX.Element[]>(
    []
  )
  const deferredResultantText = useDeferredValue(resultantText)
  const [palindromeRemainingChars, setPalindromeRemainingChars] = useState('')
  const palindrome = useRef<string[]>()

  const initialtextBackGroundState = {
    border: '',
    background: ''
  }
  const [textBackGround, setTextBackground] = useState(
    initialtextBackGroundState
  )

  const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value)
  }

  const buildTextLayout = () => {
    const splitedTextLetters = inputText.split('')
    const splitedPalindromeRemainingChars = palindromeRemainingChars.split('')
    palindrome.current = splitedPalindromeRemainingChars

    if (!palindrome.current.length) {
      setResultantText(splitedTextLetters)
      return
    }
    const textForLayout = splitedTextLetters.map((elem, index) => {
      if (elem === palindrome.current?.[0]) {
        palindrome.current.shift()
        return <span key={index}>{elem}</span>
      }
      return (
        <span style={{ color: 'red' }} key={index}>
          {elem}
        </span>
      )
    })
    setResultantText(textForLayout)
  }

  const resetInput = () => {
    setTextBackground(initialtextBackGroundState)
    setPalindromeRemainingChars('')
  }

  const checkPalindrome = useCallback(
    async (input: string) => {
      try {
        const {
          data: { result }
        } = await fetchPalindromeInfo(input)
        setPalindromeRemainingChars(result)
        setTextBackground(palindromeStatus.fulfilled)
      } catch (err) {
        const errorStatus = err as AxiosError
        const { data: error } = errorStatus?.response || {}

        console.error(error)
        setPalindromeRemainingChars('')
        setTextBackground(palindromeStatus.rejected)
      }
    },
    [inputText]
  )

  useLayoutEffect(() => {
    buildTextLayout()
  }, [inputText, palindromeRemainingChars])

  useEffect(() => {
    if (!inputText) {
      resetInput()
      return
    }
    // Debouncer
    const timer = setTimeout(() => {
      checkPalindrome(inputText)
    }, 300)

    return () => {
      clearTimeout(timer)
    }
  }, [inputText])

  return (
    <>
      <div className='flex justify-center items-center h-20'>
        <input
          onChange={e => handleChange(e)}
          placeholder='Enter your word'
          className='border-solid border-[#363336] border-[1px] h-10 px-5 rounded-md text-[1rem] font-medium placeholder:font-semibold'
        />
      </div>
      <div className='flex justify-center items-center h-20 text-[1.7rem] font-semibold'>
        <span style={textBackGround} className='text-center px-8'>
          {deferredResultantText}
        </span>
      </div>
    </>
  )
}

export default App
