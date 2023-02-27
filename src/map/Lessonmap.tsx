type LessonmapType = {
    students: Array<StudentType>;
}

type StudentType = {
    id: number
    name: string
    age: number
}


export const Lessonmap = (props: LessonmapType) => {

    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    return (
        <div>

            {topCars.map((car, index) => {
                return (
                    <table>
                        <tr>
                            <th key={index + 1}>{car.manufacturer}</th>
                            <td>{car.model}</td>
                        </tr>
                    </table>
                )
            })}
        </div>
    )
}