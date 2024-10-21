import { v4 as uuidv4 } from 'uuid'

import styled from 'styled-components'

import { FOOD_IMG_ARR_KEY, EXERCISE_IMG_KEY } from 'constants/responseKeys'

import Image from './Image'

const DetailCard = ({ type, list }) => {
  const nurientNamesArr = [
    { ko: '영양소', en: 'food_name', unit: '' },
    { ko: '칼로리', en: 'calory', unit: 'kcal' },
    { ko: '단백질', en: 'protein', unit: 'g' },
    { ko: '탄수화물', en: 'carbohydrate', unit: 'g' },
    { ko: '지방', en: 'fat', unit: 'g' },
  ]
  const routineNamesArr = [
    { ko: '세트', en: 'sets', unit: '' },
    { ko: '반복횟수', en: 'reps', unit: '' },
    { ko: '무게', en: 'weight', unit: 'kg' },
    { ko: '총 중량', en: 'total_weight', unit: 'kg' },
  ]
  const isTypeFood = type === 'food'
  const targetArr = isTypeFood ? nurientNamesArr : routineNamesArr
  const imagesKey = isTypeFood ? FOOD_IMG_ARR_KEY : EXERCISE_IMG_KEY

  return (
    <CardUl>
      {list.map((data) => (
        <CardLi key={uuidv4()}>
          <Image
            src={data?.[imagesKey]}
            alt={`${data?.[isTypeFood ? 'food_name' : '근력 운동 자세 ']} 이미지`}
            width={175}
            height={175}
          />
          <div>
            {targetArr.map((name) => (
              <p key={uuidv4()}>
                <span>{name.ko}</span>
                <br />
                <span>
                  {isTypeFood
                    ? name.en === 'food_name'
                      ? data?.food_name
                      : data?.nutrient?.[name.en]
                    : name.en === 'total_weight'
                      ? data?.each_tot_weight
                      : data?.grams?.[name.en]}
                  {name.unit}
                </span>
              </p>
            ))}
          </div>
        </CardLi>
      ))}
    </CardUl>
  )
}

export default DetailCard

const CardUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 36px;
  justify-content: center;
`

const CardLi = styled.li`
  display: flex;
  align-items: center;
  gap: 40px;

  img {
    border: 1px solid #bfbfbf;
    border-radius: 5px;
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    p > span:first-child {
      font-size: ${({ theme }) => theme.fontSize.regular};
      font-weight: ${({ theme }) => theme.fontWeight.medium};
    }
    p > span:last-child {
      font-size: ${({ theme }) => theme.fontSize.medium};
      font-weight: ${({ theme }) => theme.fontWeight.medium};
      color: ${({ theme }) => theme.colors.mainBlue};
    }
  }
`
