import avatarDefault from 'src/assets/images/avatarDefault.png'
import { config } from 'src/constants/config'

export function formatCurrency(currency: number) {
  return new Intl.NumberFormat('de-DE').format(currency)
}

export function formatNumberToSocialStyle(value: number) {
  return new Intl.NumberFormat('en', {
    notation: 'compact',
    maximumFractionDigits: 1
  })
    .format(value)
    .replace('.', ',')
    .toLowerCase()
}

export const removeSpecialCharacter = (str: string) =>
  // eslint-disable-next-line no-useless-escape
  str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, '')

export const generateNameId = ({ name, id }: { name: string; id: string }) => {
  return removeSpecialCharacter(name).replace(/\s/g, '-') + `-id=${id}`
}

export const getIdFromNameId = (nameId: string) => {
  const arr = nameId.split('-id=')
  return arr[arr.length - 1]
}

export const rateSale = (original: number, sale: number) => {
  return (100 - (sale * 100) / original).toFixed(0) + '%'
}

export function convertStringToBoolean(str: string) {
  var lowerCaseStr = str.toLowerCase()
  if (lowerCaseStr === 'true') {
    return true
  } else if (lowerCaseStr === 'false') {
    return false
  } else {
    return null
  }
}

export const getAvatarUrl = (avatarName?: string) =>
  avatarName ? `${config.baseUrl}images/${avatarName}` : avatarDefault
