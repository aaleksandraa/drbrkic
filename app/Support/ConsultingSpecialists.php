<?php

namespace App\Support;

class ConsultingSpecialists
{
    /**
     * @return list<array{name: string, title: string, focus: string|null}>
     */
    public static function roster(): array
    {
        return [
            ['name' => 'Dr Savić', 'title' => 'Specijalista neuropsihijatrije', 'focus' => null],
            ['name' => 'Dr Milan Blagojević', 'title' => 'Specijalista interne medicine', 'focus' => null],
            ['name' => 'Dr Aleksandar Subotić', 'title' => 'Specijalista hirurgije', 'focus' => null],
            ['name' => 'Dr Zlatan Marković', 'title' => 'Specijalista ginekologije', 'focus' => null],
            ['name' => 'Dr Jovica Mišić', 'title' => 'Specijalista hirurgije', 'focus' => null],
            ['name' => 'Dr Pero Nakić', 'title' => 'Specijalista hirurgije', 'focus' => null],
            ['name' => 'Dr Ljiljana Đokić', 'title' => 'Specijalista anesteziologije', 'focus' => null],
            ['name' => 'Dr Sanja Stankić', 'title' => 'Specijalista fizikalne medicine i rehabilitacije', 'focus' => null],
            ['name' => 'Dr Nenad Laketić', 'title' => 'Specijalista nuklearne medicine', 'focus' => 'Štitna žlijezda'],
            ['name' => 'Dr Miloš Stančetić', 'title' => 'Specijalista psihijatrije', 'focus' => null],
            ['name' => 'Spec. Sanja Davidović', 'title' => 'Specijalista medicinske biohemije', 'focus' => null],
            ['name' => 'Dr Larisa Vasiljević', 'title' => 'Specijalista kardiologije', 'focus' => null],
        ];
    }

    /** @return list<string> */
    public static function fields(): array
    {
        return [
            'Neuropsihijatrija',
            'Interna medicina',
            'Hirurgija',
            'Ginekologija',
            'Anesteziologija',
            'Fizijatrija',
            'Nuklearna medicina',
            'Psihijatrija',
            'Medicinska biohemija',
            'Kardiologija',
        ];
    }

    /**
     * @return array{roster: list<array{name: string, title: string, focus: string|null}>, fields: list<string>}|null
     */
    public static function forDepartment(string $slug): ?array
    {
        if ($slug !== 'specijalisticki-pregledi') {
            return null;
        }

        return [
            'roster' => self::roster(),
            'fields' => self::fields(),
        ];
    }
}
