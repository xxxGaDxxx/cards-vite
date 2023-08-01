import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export const schemaProfile = z.object({
  nickName: z
    .string()
    .trim()
    .nonempty('Enter userName')
    .min(3, 'Nickname must be at least 3 characters'),
})
export type ProfileFormType = z.infer<typeof schemaProfile>

export const useProfileForm = () => {
  const { handleSubmit, ...restProps } = useForm<ProfileFormType>({
    resolver: zodResolver(schemaProfile),
    mode: 'onSubmit',
  })

  return { handleSubmit, ...restProps }
}
