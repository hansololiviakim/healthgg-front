import { useQuery } from '@tanstack/react-query'

import { getExerciseBest } from 'api/exercise'

import { PageTitle, BoardList, Loading } from 'components'

const ExerciseList = () => {
  // todo: 에러페이지 제작 후 isError || error일 때 해당 페이지로 랜딩
  const { data, isLoading, isSuccess, isError, error } = useQuery({
    queryKey: ['getExerciseBest'],
    queryFn: () => getExerciseBest(),
    throwOnError: (err) => console.error(err),
  })

  // todo: 무한스크롤
  return (
    <>
      <PageTitle>🍜 BEST 운동볼륨</PageTitle>
      {isLoading && <Loading />}
      {isSuccess && data && <BoardList type="exercise_volume" path="/exercise-volume" list={data} />}
    </>
  )
}

export default ExerciseList
