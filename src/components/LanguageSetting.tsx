import { MenuItem, Select, SelectChangeEvent } from '@mui/material'
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'

export const LanguageSetting = () => {
  const { t } = useTranslation()

  const _onChange = ({ target }: SelectChangeEvent<string>) => {
    i18next.changeLanguage(target.value)
  }

  return (
    <Select
      onChange={_onChange}
      defaultValue={'en'}
      sx={{
        '& .MuiOutlinedInput-notchedOutline': { border: 0 },
        '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
          { border: 'none' },
      }}
    >
      <MenuItem value={'vn'}>{t('vietnamese')}</MenuItem>
      <MenuItem value={'en'}>{t('english')}</MenuItem>
    </Select>
  )
}
