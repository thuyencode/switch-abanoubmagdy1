interface Props {
  checked: boolean
  toggle: () => void
}

export const Switch = ({ checked, toggle }: Props) => (
  <label className='switch'>
    <input type='checkbox' checked={checked} onChange={toggle} />

    <div className='slider' />

    <div className='slider-card'>
      <div className='slider-card-face slider-card-front'></div>
      <div className='slider-card-face slider-card-back'></div>
    </div>
  </label>
)
