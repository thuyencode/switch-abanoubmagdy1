import { cn } from '../lib/utils.ts'

interface Props {
  checked: boolean
  toggle: () => void
}

export const Switch = ({ checked, toggle }: Props) => (
  <label className='relative inline-block h-[2em] w-[3.5em] text-[17px]'>
    <input
      className='h-0 w-0 opacity-0'
      type='checkbox'
      checked={checked}
      onChange={toggle}
    />

    <div
      className={cn(
        'absolute inset-0 cursor-pointer rounded-[30px] bg-[#f5aeae] duration-[0.4s]',
        { 'bg-[#9ed99c]': checked }
      )}
    />

    <div
      className={cn(
        'pointer-events-none absolute bottom-[0.3em] left-[0.3em] h-(--circle-dim) w-(--circle-dim) rounded-[20px] duration-[0.4s] content-none',
        { 'translate-x-[1.5em]': checked }
      )}
    >
      <div
        className={cn(
          'absolute inset-0 transform rounded-full bg-[#DC3535] duration-[0.4s] backface-hidden perspective-[1000px]',
          {
            '-rotate-y-180': checked
          }
        )}
      ></div>
      <div
        className={cn(
          'absolute inset-0 rotate-y-180 transform rounded-full bg-[#379237] duration-[0.4s] backface-hidden perspective-[1000px]',
          {
            'rotate-y-0': checked
          }
        )}
      ></div>
    </div>
  </label>
)
