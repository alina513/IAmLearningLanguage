
import {Form, OptionContainer, Label, Select} from './Filter.styled';
import { nanoid } from 'nanoid';



export function Filter() {
    

     const languages= [
        "",
        'English',
        'Spanish',
        'Polish',
        'French',
        'German',
        'Italian',
        'Mandarin Chinese',
        'Korean',
        'Vietnamese',
    ]
    
     const levels=[
        "",
        'A1 Beginner',
        'A2 Elementary',
        'B1 Intermediate',
        'B2 Upper-Intermediate',
        'C1 Advanced',
        'C2 Proficient',
    ]
    
     const prices=[ "", 10, 20, 30, 40]

      

    return(
        <Form>
            <OptionContainer>
               <Label>Languages</Label>
               <Select id = "languages" name="languages" >
                {languages.map(language=>(
                    <option key={nanoid()} value={language}>
                        {language}
                    </option>
                )) }
                </Select>                
            </OptionContainer>

            <OptionContainer>
               <Label>Level of knowledge</Label>
               <Select id = "level" name="level" >
                  {levels.map(level=>(
                    <option key={nanoid()} value={level}>
                        {level}
                    </option>
                  ))}                  
                </Select>   
           
            </OptionContainer>

            <OptionContainer>
               <Label>Price</Label>
               <Select id = "price" name="price" >
                  {prices.map(price=>(
                    <option key={nanoid()} value={price}>
                        {price}
                    </option>
                  ) )}
               </Select>                
            </OptionContainer>

        </Form>

    )

}