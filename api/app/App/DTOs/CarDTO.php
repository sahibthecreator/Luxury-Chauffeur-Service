<?php

namespace App\DTOs;

class CarDTO
{
    private $id;
    private $name;
    private $type;
    private $description;
    private $specification1;
    private $specification2;
    private $dayRate;
    private $maxPassengers;
    private $maxSuitcases;
    private $maxLuggages;
    private $mainImage;
    private $image1;
    private $image2;
    private $image3;
    private $image4;
    private $image5;
    private $carImage;

    // Getter and setter methods for each property

    public function getId()
    {
        return $this->id;
    }

    public function setId($id)
    {
        $this->id = $id;
    }

    public function getType()
    {
        return $this->type;
    }

    public function setType($type)
    {
        $this->type = $type;
    }

    public function getName()
    {
        return $this->name;
    }

    public function setName($name)
    {
        $this->name = $name;
    }

    public function getDescription()
    {
        return $this->description;
    }

    public function setDescription($description)
    {
        $this->description = $description;
    }

    public function getSpecification1()
    {
        return $this->specification1;
    }

    public function setSpecification1($specification1)
    {
        $this->specification1 = $specification1;
    }

    public function getSpecification2()
    {
        return $this->specification2;
    }

    public function setSpecification2($specification2)
    {
        $this->specification2 = $specification2;
    }


    public function getDayRate()
    {
        return $this->dayRate;
    }

    public function setDayRate($dayRate)
    {
        $this->dayRate = $dayRate;
    }

    public function getMaxPassengers()
    {
        return $this->maxPassengers;
    }

    public function setMaxPassengers($maxPassengers)
    {
        $this->maxPassengers = $maxPassengers;
    }

    public function getMaxSuitcases()
    {
        return $this->maxSuitcases;
    }

    public function setMaxSuitcases($maxSuitcases)
    {
        $this->maxSuitcases = $maxSuitcases;
    }

    public function getMaxLuggages()
    {
        return $this->maxLuggages;
    }

    public function setMaxLuggages($maxLuggages)
    {
        $this->maxLuggages = $maxLuggages;
    }

    public function getMainImage()
    {
        return $this->mainImage;
    }

    public function setMainImage($mainImage)
    {
        $this->mainImage = $mainImage;
    }

    public function getImage1()
    {
        return $this->image1;
    }

    public function setImage1($image1)
    {
        $this->image1 = $image1;
    }

    public function getImage2()
    {
        return $this->image2;
    }

    public function setImage2($image2)
    {
        $this->image2 = $image2;
    }

    public function getImage3()
    {
        return $this->image3;
    }

    public function setImage3($image3)
    {
        $this->image3 = $image3;
    }

    public function getImage4()
    {
        return $this->image4;
    }

    public function setImage4($image4)
    {
        $this->image4 = $image4;
    }

    public function getImage5()
    {
        return $this->image5;
    }

    public function setImage5($image5)
    {
        $this->image5 = $image5;
    }

    public function getCarImage()
    {
        return $this->carImage;
    }

    public function setCarImage($carImage)
    {
        $this->carImage = $carImage;
    }

    public function toArray()
    {
        return [
            'id' => $this->id,
            'type' => $this->type,
            'name' => $this->name,
            'description' => $this->description,
            'specification_1' => $this->specification1,
            'specification_2' => $this->specification2,
            'day_rate' => $this->dayRate,
            'max_passengers' => $this->maxPassengers,
            'max_suitcases' => $this->maxSuitcases,
            'max_luggages' => $this->maxLuggages,
            'image_1' => $this->image1,
            'image_2' => $this->image2,
            'image_3' => $this->image3,
            'image_4' => $this->image4,
            'image_5' => $this->image5,
            'car_image' => $this->carImage,
        ];
    }
}
