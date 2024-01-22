import { yupResolver } from '@hookform/resolvers/yup'
import { createSearchParams, useNavigate } from 'react-router-dom'
import { Schema, schema } from 'src/utils/rules'
import useQueryConfig from 'src/hooks/useQueryConfig'
import { useForm } from 'react-hook-form'
import omit from 'lodash/omit'
import { pathRoutes } from 'src/constants/path.routes'

type FormData = Pick<Schema, 'name'>
const nameSchema = schema.pick(['name'])

export default function useSearchProducts() {
  const { handleSubmit, register } = useForm<FormData>({
    defaultValues: {
      name: ''
    },
    resolver: yupResolver(nameSchema)
  })

  const queryConfig = useQueryConfig()

  const navigate = useNavigate()

  const onSubmitSearch = handleSubmit((data) => {
    const config = queryConfig.order
      ? omit({ ...queryConfig, name: data.name }, ['order', 'sort_by'])
      : omit({ ...queryConfig, name: data.name }, [''])

    navigate({
      pathname: pathRoutes.productList,
      search: createSearchParams(config).toString()
    })
  })
  return { register, onSubmitSearch }
}
