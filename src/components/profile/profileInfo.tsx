import { ChangeEvent, useEffect, useRef, useState } from 'react'

import { Edit, Logout } from '../../assets/icons'
import { Avatar } from '../ui/avatar'
import { Button } from '../ui/button'
import { Card } from '../ui/card'
import { ControlledTextField } from '../ui/controlled'
import { Typography } from '../ui/typography'

import s from './profileInfo.module.scss'
import { ProfileFormType, useProfileForm } from './schemaProfile.ts'

export const ProfileInfo = () => {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const [selectedImage, setSelectedImage] = useState(imgE)
  const [isEditing, setIsEditing] = useState(false)

  const [initialUserName, setInitialUserName] = useState<string | undefined>('Vlad')

  const onSubmit = async (data: ProfileFormType) => {
    // Проверьте, что новое значение userName отличается от предыдущего значения nameUser
    if (data.nickName !== initialUserName) {
      setInitialUserName(data.nickName)
      // (выполните запросы к API, обновите состояние и т. д.)
      setIsEditing(false)
    } else {
      setError('nickName', {
        type: 'manual',
        message: 'Same nickname  ',
      })
    }
  }

  const { control, handleSubmit, setValue, setError } = useProfileForm()

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target?.files?.[0]

    if (file) {
      const reader = new FileReader()

      reader.onload = () => {
        setSelectedImage(reader.result as string)
      }

      reader.readAsDataURL(file)
    }
  }

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const onClickEditing = () => {
    setIsEditing(true)
  }

  useEffect(() => {
    setValue('nickName', initialUserName ? initialUserName : '')
  }, [initialUserName, setValue])

  return (
    <Card className={s.card}>
      <Typography variant={'large'} as={'h1'}>
        Personal Information
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={s.containerPhoto}>
          <Avatar src={selectedImage} name={'userAva'} size={96} />
          <Button variant={'secondary'} className={s.buttonAddPhoto} onClick={handleButtonClick}>
            <Edit />
          </Button>
          <input
            ref={fileInputRef}
            type="file"
            id="fileInput"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleImageChange}
          />
        </div>

        <div className={s.containerUserName}>
          {isEditing ? (
            <ControlledTextField
              label={'Nickmame'}
              name={'nickName'}
              control={control}
              placeholder={'nickmame'}
              containerProps={{ className: s.input }}
            />
          ) : (
            <>
              <Typography as={'span'} variant={'h1'} className={s.userName}>
                {initialUserName}
              </Typography>
              <Button variant={'link'} onClick={onClickEditing}>
                <Edit />
              </Button>
            </>
          )}
        </div>

        {!isEditing && (
          <Typography as={'p'} variant={'body2'} className={s.emailUser}>
            {email}
          </Typography>
        )}

        {isEditing ? (
          <Button type={'submit'} variant={'primary'} fullWidth className={s.buttonSave}>
            Save Changes
          </Button>
        ) : (
          <Button variant={'secondary'} className={s.button}>
            <Logout /> Log Oug
          </Button>
        )}
      </form>
    </Card>
  )
}

const email = 'asdwdww@sasd'

const imgE =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgWFRUYGRgaGhoaGhocGhgaHhoaGBoaGhocGBocIS4lHCErIRoaJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjQrISs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xABAEAACAQIDBAYJAgQEBwEAAAABAgADEQQSIQUxQVEGImFxgZEHEzJScqGxwfAU0UKCkuFTstLxFRY0YqKjwiP/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAjEQACAgICAgMAAwAAAAAAAAAAAQIRITEDEkFRBBNhMoHw/9oADAMBAAIRAxEAPwD0+0LTOwm26FQaOF7Hsp+eh85oo4bUEEdhuPOc9UDFEIQEKFYsIRRHQCRRCEdAAhCEKJEixbzG6UbcXCUS+hdjlpqeLW3kDXKBqfAcY6GifbW2qOFXPWe3uqNWbsVePfuHGeZbc9IuIqErhwKScxZnP8x3eA05zk9p7Qq4h2d3LMx3nyAHAAchpDD7OqPbIjN3KT9JWFs0jBsixOKqOczuzNzZixPiTeSYLHVaRDU6j0233ViPodfGXV2DiND6p/InztIq2yKqC7Iw8G8RqId17L6P0dt0c9IjghMWAw3esUWYfGo0bwsewz0ihVV1V0YMjC6sCCCOYInzs6EaETf6I9KKmEcKSWpMeunfvZOTce3ceYGrIlD0e3kwkeHrK6K6MGRgGUg6EEXBjzIogDARbRIgAwhCKgEMS94sIihIRYhioY68IzL+awk4Fg8artmcoGIHHkBc8uQAmrsLGHD2KMRzG7Nx14GYLq6kFRxBbt38eOutuYljFV1VmsdAFG/tuSOdgZ02mU00ep7K20lYlCMrjhcEMOakfQ6+U1rTyfZe0QhDq3WUWzDmONuO/Xune9Htr+sGR2Bca30GYEX9kDhJcSJI2++LAQEKIEi7oQjCwEIsICATy/0jM1fFpQU6IgB45S5zMbfCEnqE8z2rSvjatQ8XIv8ACAn0UQbpWa8Me0ihhtkUqdsqDNbedT/abeATlM92uZpYAdn0nDJtyyevGKjHBuUqK24SviqI4Wk9NtPZ+kirv2RvQls57HYNH9pFPeBfzmFjujqMCaZytyOo/tOlxp13SojwhKUXsXJCLWUavowx5eg9FvapOCByV76f1Kx/mnbTz3oT1MbUA9mpTY/zKwYfItPQiJ2byeTOPWVAYQhEQF4kWJENCEQiwgMSI0dKO0nJVgpAAHX9m+UjXQ9n1iStjRJ/xKn73+b9oTjv+JJ+E/vCV1RdBU2Oh3adszqvR9Lnnz/tOkY6SqzazmjN2elLji0cnW2Q9MkgEg6dk6TovTZayZwAQN5ud4I085ZenmCyfB3R0OujAHkL6H87Z2Ryjz+RJOjq4QtFiOYQQimF4wAQEIGAgE82x5vVb4mPmxP3ncbf2oMNQaqVzWKi2v8AEwHDXjODFa4NSw1N5E3ijp+PF32Ia2KpoxDNrxl/ZO1aLNlDEG3G1j3ec5lqyq7WR6jkFio5AEnXuEr4et60NUoIVVApc3DBc+awPI9U34bpy9dtI9FS0mz1BKgsLG/4IytWXLckD7c5y2watZnyuOErbVr1rlR7GtydwHGR2NOppY7aOHJ9vylOjUR75GvbzmMK6UGVHoMajZcg0u3rCwUqOVxrf3ha95ZwddGclQUZSQykd4I8DL607Zm5WsM3ujPVxKHtI/qVl+89CM82w2IFKolUi4UgkXtu138Oc9A2bjErUkqp7LrcdmtvqJ08bwed8iL7dvBaiGLAGWc4ghCEQwtEixLSR2E43pfi2TMouLnh3Aa/XuM7Kcd0hwLV8UlGxs5GY+6qgZj5XlRWS4vJwGZ+Z8x/qiz27/l/D/4S+QhNSrRzDKZVqrrK2J26FYjLfuMifbCsL5SO8b55yR6rZdD3Fvy4mhgNTY2uf217pivXUqGU/wBuM1dg4pGdbG+Y2B1tcKWIvxtbwnbB4PO5lmzqokUQEZx2AhCEoViwiRYUIzekNEPQdTxKeedZwyYUoGQnc1/AgWnoeOw3rEdPeBA7DvB8Dbynmn6i1V014jXgVI0vxt1vMTDmi7/o9D4kl1a8p2WUwfFR4jSamFwYCZVRQOJAH03X7ZSw2JAW3GT4vayIhuxW1r27dw/Oc4k3bR6LSdBsu3rW0sASB4aRireqRxvp4cZHsbaWHFRusdN4NwdeYOshxW18P6x7OSV90M1uNzl3eMOrKs09oYJSQzIM4tZgEv4MRcb5mthB7tu3jNKhjw9NbsWBFwbcDzlHEVwd0JN2iUlRC+ELlUFiNSb8h/edx0ep5MNSUe5cfzEsPrODwtYvXFNSQxCgW5n/AH17p6WiBQFGgAAHcBYTt4k7bPN+XJUo/tjoQhNTiEEWBiRMYRCI4xLSRiSPDYYfqA//AGMPmJLFRrHMeAJ8tftHHDKRpQnO/wDMy/4L/KJNLRfVnhdP9Tv6631uHdb9xZjKzbRxYvd3IHFhm87zpTiLoGUZhYWsbeUphWf+E9t8o+k5fs9o6vrltNlDZ23aj1ko1FLBnAIQkZtDbttztwvuM64PURsy3LqAAqHIqXGoS3srbv8AEkk5HR/DqK1aqLH2aanuF3I8SB3qZrepcYgsCSHVdBuBFwftNJVWA4otyydP0L21WrO9OqlgoJBzFtxA3kTsBOc6IYHKnrCLZhlXtA1LeJH1nSS4X1ycvyun2vr/AJgIkDFEtHMELQhGAWnObb6PIxqVlLBgjPlFrFwNSTa+ovpzN50cR0DAg7iLHxFjBxT2OEnF2meQpVIYmOO0KbEp7bbmAF9eN5SrVQGdb6hmUnkyEq3zEz6eyWABDsoYjMABrvsBOH61bs9lcrpUaDYI1NTRQZeRVWOjaLqDvy3tLOGw60wqvQ0tqQqtqfey3Am5sTZ2DKDPSYnS7esqHUd2ovblxkW2tl4YJemHRt6sr1LbhvDix1PK+nC80cU1RCnJSumRU8ehGVGG7duNu6UmqkN2XmM+z3VTUNUk3Cg2ABJ001uZaxGOVFLHcoufAbhMnDKo0+x07PR9gdHhTcV2fMSoZVygFC69a7X6wFyBoNOc6S0r4An1SX35EvexN8o3kaeUsTtUUsI8ec3J2xIRTEjJCEBEEkoWIYsDEMS0a4uCOw/S0daC+0CeNx5gxLZUdmZkq+4vmITV/Tr7sJdHT2PHqewkcFsPVemCSbABkbmQrez4SpidjVVNmqlhyXKt/Jb/ADnVJWGW1rBb6W4Dl+cJXYZnIHATjzZ2NRoo7GweUWCgBV0Xs/NZsbJ2Y1VwBdeLk6kLp7PAcpNsXBesYo17MGuw3gLYad+k67Z+zkorlW5J3sxuTbdu08hOhRtKzjnyqLdb8FmkgVQqiwAAAHIaRwiwE1OFhCFoRiCEDARiCLEERmABJNgBqd1oxHgXS1Gw2PxCD2XqMyj4+ue7Vz5SzsbEF0CchY9uotpLPpHZKmJarTIZTlGYcWVQpt5b5y2EezKRwNz290wlFSTO/jk41Zt46tiaLdR3AtoQ2t+XPgfOTbNStV1qMxuAdWJv8+2ZmL2szMSDa9h4DX6aeMRtuPe6mwB6vDTl3fnCT1fWjVcqUr8Gn0hxZVVB4EWF9LTFXEms6IN17trvAtKeMxTObkkndzNuE1ej+FtdzzsPv+3hBpQQlJ8kqWj3zZdUPRpsDvprfvyi487y0Z4ymNfDv62k7IWtmAOjEAAEruJtpqOA5Tq9ldPQdK6cfbT7qfsZpHkizlnwyi8HdwMqYDaNKsM1N1bsG8d43iWpRjoWIIWgJIxIGLAwGJI3NteREkMjrJmUiSUnkZ+vMSVc6cvp+8I8nTcfRwSYVwMzVA3etr9+uss4JLFveAGvhpHF8t84BFjrYaDjv8ZjYLGlc7E9W97jjYhba62MxhFt2dHJJJUtnb9FPbqDflVfAuSba/DOnnLdAxenVc73cDwVdO/2jOptOhZPO5cSaFgYkW0oyCEIRiCLEJ4zj+kPTJUumHszbjU0sPgH8R7d3fE5JbKjFywjodq7YpYZb1HseCDVm7h9zpPM+k3S2piOqOol/ZB38i5/i+kyMVinqMXdizHUkm5MpV1mEptnVDiUc+Rjt6ymy8R99f3mENDx3/vNJKxR81rjiOyTYvBI4zofzlJUqf4dCipx/Uc/VqamKlTn+HlrLtTY9Q7lkabHqHhL+yJn9ErIqFMu4UC543nZYHDZEVeQkGztlrSW+9jvv9pPiNoKgIXV+HZ2mYTm5ukdUIR442yrtCrchR/De/eT+ecjQSOmt9T4ywolLGDCTt2WMLinpkMjFSNxBIt3WnY7F6cstlxC5xuzi2Yd43H6zixFtKUmtGcoKWz2vA46nWTPTdWXs3jsI3iWDPFcDtCpRbPTcqRyO/sI3EdhnabL6dA2Wun86fdT9j4TRTTMJcLWjtoSrgdo0qy3pur9g3jvU6iWhKM6AxIWjkQnQSRoqfpF7ITS/SDmfzxhHTKtnkfSDGFVK07Fr7j3eHMzJU5lA3AkmwGh3/7TPp4SoXGdyx7+Vz9zNTDYKpXqph6XtMdW4IgtnY9gB8TYcZNqqR2dXfaR3/QhwuHBJAFSoy07/wAWQWNr7zdX8FnTzkOmuyL7PZKAI9QEemBvtS3jvK5vGcbsj0iYmkqhwtdLC2clXty9YN9u0EnnN+rRxTfaTZ7EITkNiekHCV+q7Gg/KpbKfhqDq/1ZT2TrkIIuDcHcRqD3HjEZNNbFkGMxiUkL1GCqOJ49gG8mc30h6Xii5Smqubasb2B5C2/vnA7S2nVrsWdyx+nYBuEiXIlhGseFyy9G70m6WvXulK6U+PvP8XIdk5YxoEcBMW29nTGKiqQkiqCTGMYSSjNr05TDMhupI/OM13p3lOpRvKTAbT2u66EA9uoMedrvwUX7zK5w0cuFipeivsl7JWx1R97W7tPnvj6FOLSoWlxKcMLQm29iomklCwURQIhBCOtEtABLRTLuztl165tRpM3aB1R3sdB5zrNnejqo2teqqj3Vux7iTYD5ylFvQnJI4mhiXQhkYqRxBII8Z6V0L2lXxCH1ilgL2qaAfCT/ABd4uZtbL6J4SgOrSDN772dvC4sPACbai01jBryZSkpeCCnhh/Eb/STiw0EdK2KqZbGaJEJB+ob3YTG/XNziQwX0Zw2A2K1ZilJbkjVjoEB0uSN3YN+nfO72FsCnhKZC9Z21dyLFiNwHJRwH3jWxbrYipov8NlsbA6EkXPPwl7BbRSspyHrKbMvEHh4Hn38pPHFRL5eVz/ENxCXDDhY/SfPG0sL6mvVpW0p1HA+DMcv/AI2n0bUXRu4zwPp0mTH4jkWU+Bpp97zZs50YDmxmxsbpHiMOpSnUYI29Dquu+wPsntWxmNUjZLGjpDtFXN26p+XgZMJzSPLmGxpXTeJlLi9GseT2bIhaRUMQrbjry/N8mEwaa2aqnoQiJaOiCIBjLIyknIjGgBD6uApyaKBGAxUkirFtALABRFtAR0QDqVJnZUUXZmCqOZY2A856RsLoFTSzYgio2hCC4Qd/F/Gw7DMf0ebD9ZUOIcdSmbIPefn3KPmRynp82hFVbM5y8IZTphQAoAA0AAsAOQA3SSEYx0mpkOvCAERjACtVqnMFBtzkG0dBv0/eXPVdYNyFvz5ypiASb8N0RUdmf6jsiy3lHMQhSNLZzu0hcZQRmNrd9h+8t7H2N6tvWqTnIs2vtDfYxGorcaAHMOA3+zpy3mdBhlsBKjoylsQG4J7DPFvS1hcmODcKlJG8QzqfoJ7XVTQ246GeTemhLVsM3EpUB/lZP9Udk0eaMY3Nwj2jVUCAADHAxIQAmp1SJoYHHkvkY3DDS/A8u6ZF4lOpZ7jhb6xSimqY4tp2ddCNRgdey8W84zqC0TLFvC8YhpESSRtoAAEUCJeOvABQZJRQuwRRdmIVRzLGwHmZEDOl6AYL1mMQkdWmrOe8dVfmwPhHFW6E3Ss9R2RgFoUUpLuRQCebb2PiST4y7FjAZ0nOF4togjjGAsaYoEWIBpkdcdUyaR1dxgCKXq4SW0IizBDa8eHFefG2+buGPVEwr671/qPysJuYM3QRx0RLZMRPKPTQvWwrcbVlP/qM9YE8t9NKaYY9tT6JKEeUsI08Y8xpgARpjo0wAa5kdE7z2x1XdEoDqjtMBnWYduovcJLeQ0PZHcJMJyPZ0rQ6JAxLxAKYl4hMW8AC8LxLxoaOgJZ6T6MMFlpVKx/jYKvwoLk+bEfyzzPNPc+juz/0+GpUraqozfE3Wb5ky4LNmc3ijSYxl9YVDrGM03MiXjHximOMGAkWJaKTEARlXdHHsiNqIAQQj8sSFDs55T2k+Zv5WmxgD1Jip+WLH67ps7NPVhEJFqeX+mluphfiqfRJ6iZ5P6aX62FHZWPl6sfeUSeXmNbdHGNaACxhjjEvGBFiPZMlw41USOr7J8PrJsKLuOyIZ0qnQd0cGlYVIoqTko6SxmiXkJf81gGjoVk14XkYMdAQpMaWixjRgbvQzA+vxlJCLqpzv8Ka697ZR/NPcCZ516KNn2FauR7RFNT2DrNbxK+U9BdprBYMpO2MrtIXOkkri8gJ1tw5zQSLlBriSyjhcQAcpHM3l0G8QmLCVDjkFT1eYZrXtcXsb2038D5SxeIB4lfDPfN8RiviFG9lv3j6SDA3teHkdYLuWEbcwjEcsBqf9LN8z9Js7LHU8Zj5eQPLefudZtbMHU8ZMRyLQM8i9NJ//bDDlTqHzZP2nronjPpkq3xdJfdog/1VH/0iWSeemNaKYh4QAUxl52/RX0f1cbSFf1q06bE5OqXZwrFWNrgKLg2Nze27no7f9Fxo4d6tKuztTUuUZAMyqLtkIOhtuBve1tI6A81qbj4fUSfAnrXlas3V7yPvLGAHziGXVr9UGWMGxJvKDplss1MMmVLzlNxzPFQyG9zLNNYwHARYsSACxhMCZsdE9n+vxdFCOrmzt8KdY37DYDxglYmz1vozgP0+FpUzvC5n+Jus3kTbwmk5iVX1jGPKdCMhXbqyq723aye9wZUdoMaIalTKcw4G/wC82EINiO8TCrtL+xXY0wDwJCn/ALQdAe7dBMJItVaXWDBEz2y5yNQOXO3ZeAwd9XYv37v6RpLKmF4UKxgpLyHlHBY4mRloCJIRmaEYHLou8WHih+pOs29lnqf2tPOF6bp/hv8A+M1tndO6OTVH3nheREcmd1mnhnpXq5seR7tKmv8Amb/6nfJ0/wAMNCH/AKTPJumO1FxOMq1FvlJULfkqKp+YMuyTGnYejLYVPFYpjXQPSpU87BvZLswCBhxFg5sdOrOMLiPSq65grsoJ1Csyg23XAOvHzisD6T2ltrD4ZQGqU6ajQXdFAAG4C/ynHba9J2FRXVL1mIyhVBCG41Luw3cNLzxc0xv48+MAIJgLjABkAFhYm2vOTYLeJBiblh2KPvLmzk6wjbw2C2kW0oFmuZdrmwtHooEr4ltZyLLOlhQFzLirIcMlheTkyhDDARLwvAAvPQfRbgda2II0AFNT2nrP8gnnPPWM9q6LbP8AUYKkhFmYZ355n61j3AgeEuCzZMnijUL6x77pVZuEkdzaaohj1aVKwkiPxt5ayOo4iGjMx9S1u2avRu5pWO8En+o3mDjsYFr0Uzav6xbcwEJ+oHnOi2H7A5jQyVdjl/E0L+cVmiV915Watw/P7TQzJ/WQveUqgY93Z+axKdZl7oiqLvhCQ/qhCMR89vx/OUu7O9k95iQkRJkFb7zlMX7b/G3+YwhGxIrVd0sLuhCIoSEIRgB3y7s32vAwhE/4sa2jYX7Ss++EJzxN2XKO6K0IShDIN+ecSEQxye0PD6mfQlbcO4QhNeMzntFJ94jq26EJqiWUREqbvCEIvBRx+2f+vwXfU/yzvNi7jCElbB6NXnMvEe1CEtEIsJukNWEInsZFCEIAf//Z'
