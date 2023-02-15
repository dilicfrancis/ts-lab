import { Component } from '@angular/core';

@Component({
  selector: 'app-modules-cover',
  templateUrl: './modules-cover.component.html',
  styleUrls: ['./modules-cover.component.css'],
})
export class ModulesCoverComponent {
  articles = [
    {
      title: 'Year of the Elephant by Leila Abouzeid',
      content:
        "First published in Arabic in 1983, when published in English in 1989, Year of the Elephant was one of the first novel by a Moroccan woman to be translated from Arabic into English. Consisting of a novella and eight short stories, the title refers to a famous battle described in the Qu'ran, and the collection centres on life in the wake of Morocco's successful struggle for independence from French occupation. In the novella, the protagonist, Zahra, has just returned to her hometown after being divorced by her husband for being too traditional and unable to keep up with his modern way of life. Having devoted herself, alongside her husband, to the creation of an independent Morocco, she had expected to share the fruits of independence with him, but instead she finds herself cast out into a strange world. As Zahra struggles to find a place for herself in this new Morocco, her efforts reflect Moroccan society's attempt as a whole to chart a path in the conflict between tradition and modernism.",
    },
    {
      title: 'No Sweetness Here: And Other Stories by Ama Ata Aidoo',
      content:
        'A collection of 11 stories, which range from the politics of wigs to the joys of motherhood. In this collection, Ama Ata Aidoo explores postcolonial life in Ghana with honesty and humour. Tradition wrestles with new urban influences as Africans try to sort out their identity in a changing culture. True to the tradition of African storytelling, the characters come to life through their distinct voices and speech. If there is no sweetness, there is the salt essential to life, even if it comes from tears, and the strength that comes from a history of endurance.',
    },
    {
      title: 'The Girl Who Can And Other Stories by Ama Ata Aidoo',
      content:
        "In The Girl Who Can Ama Ata Aidoo looks at the roles and rules, and the games people find themselves playing, often unwillingly. Aidoo elevates the mundane in women's lives to an intellectual level in an attempt at challenging patriarchal structures and dominance in African society. Written from a child's perspective, Aidoo subverts the traditional beliefs and assumptions about the child's voice. Her inimitable sense of style and eloquence, explores love, marriage and relationships with all the issues they throw up for the contemporary African woman. In doing so, she manages to capture the very essence of womanhood.",
    },
    {
      title: 'Diplomatic Pounds & Other Stories by Ama Ata Aidoo',
      content:
        'Diplomatic Pounds and Other Stories, is a collection of Ama Ata Aidoo’s short stories that brings together diverse themes that speak to the relationship between Africa and its Diaspora in terms of home and exile and a sense of belonging and alienation. The collection reveals the intricacies of friendships and love relationships and the complexities involved in African Diaspora connections, engaging with a sense of anomie and fragmentation that is partly a consequence of living across different cultures – African and the West and reveals her interest in presenting common human frailties.  The stories cover a broader range of people within the African Diaspora than in her previous collections, expanding in a different way on the theme of African relationships and interconnections with its Diaspora. Diplomatic Pounds chronicles how returning sons and daughters relate to a mother continent that they clearly love, but which they also take great issue with.',
    },
  ];

  showModal = false;

  showModalHandler() {
    this.showModal = !this.showModal;
  }
}
